import {
	type ChatInputCommandInteraction,
	type SlashCommandBuilder,
	type Collection,
} from 'discord.js';
import { Command } from './command';

interface Command {
	data: SlashCommandBuilder;
	execute(interaction: ChatInputCommandInteraction): Promise<void>;
}

declare module 'discord.js' {
	interface Client {
		commands: Collection<string, Command>;
	}
}
