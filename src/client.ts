import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import { loadCommands } from './load-commands';

/**
 * Creates a new Discord client instance and sets up event listeners.
 *
 * @returns {Promise<Client>} The initialized Discord client.
 */
export async function createClient(): Promise<Client> {
	const client = new Client({ intents: [GatewayIntentBits.Guilds] });
	client.once(Events.ClientReady, (readyClient) => {
		console.log(`Ready! Logged in as ${readyClient.user.tag} 🚀`);
	});

	// Log in to Discord with the bot token.
	await client.login(process.env.DISCORD_BOT_TOKEN);

	// Initialize and load commands.
	client.commands = new Collection();
	await loadCommands(client);

	return client;
}
