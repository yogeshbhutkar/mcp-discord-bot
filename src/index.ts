import 'dotenv/config';
import { createClient } from './client';
import { Events } from 'discord.js';
import { executeCommands } from './command-handler';

(async () => {
	const client = await createClient();
	client.on(Events.InteractionCreate, executeCommands);
})();
