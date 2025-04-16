/*
 * This script is used to deploy application commands to Discord.
 * It reads command files from the `commands` directory, constructs the commands,
 * and registers them with the Discord API.
 *
 * CAUTION: This will overwrite existing commands and there's a rate limit on its usage.
 *
 * Usage: Run `pnpm run deploy-commands:dev` from the command line.
 * (TODO: Create a prod command)
 */

import 'dotenv/config';
import { type APIApplicationCommand, REST, Routes } from 'discord.js';
import fs from 'node:fs';
import path from 'node:path';

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(process.env.DISCORD_BOT_TOKEN!);

(async () => {
	const commands = [];

	const foldersPath = path.join(process.cwd(), 'src', 'commands');
	const commandFolders = fs.readdirSync(foldersPath);

	for (const folder of commandFolders) {
		const commandsPath = path.join(foldersPath, folder);
		const commandFiles = fs
			.readdirSync(commandsPath)
			.filter((file) => file.endsWith('.ts'));

		for (const file of commandFiles) {
			const filePath = path.join(commandsPath, file);
			const command = await import(filePath);
			if ('data' in command.default && 'execute' in command.default) {
				commands.push(command.default.data.toJSON());
			} else {
				console.log(
					`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
				);
			}
		}
	}
	try {
		console.log(
			`Started refreshing ${commands.length} application (/) commands.`,
		);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = (await rest.put(
			Routes.applicationCommands(process.env.DISCORD_BOT_APPLICATION_ID!),
			{ body: commands },
		)) as APIApplicationCommand[];

		console.log(
			`Successfully reloaded ${data.length} application (/) commands.`,
		);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
