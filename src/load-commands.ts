import path from 'node:path';
import fs from 'node:fs';
import { Client } from 'discord.js';

/**
 * Loads all command files from the commands directory and registers them with the client.
 *
 * @param {Client} client - The Discord client instance.
 * @see {@link https://discordjs.guide/creating-your-bot/command-handling.html#loading-command-files}
 */
export async function loadCommands(client: Client) {
	const foldersPath = path.join(__dirname, 'commands');
	const commandFolders = fs.readdirSync(foldersPath);

	// Iterate through each folder in the commands directory.
	for (const folder of commandFolders) {
		const commandsPath = path.join(foldersPath, folder);
		const commandFiles = fs
			.readdirSync(commandsPath)
			.filter((file) => file.endsWith('.js'));
		for (const file of commandFiles) {
			const filePath = path.join(commandsPath, file);
			const commandModule = await import(filePath);
			if (
				'data' in commandModule.default &&
				'execute' in commandModule.default
			) {
				client.commands.set(commandModule.default.data.name, commandModule);
			} else {
				console.log(
					`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
				);
			}
		}
	}
}
