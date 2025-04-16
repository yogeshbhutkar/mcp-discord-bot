import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

const getServerInfo = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.reply(
			`This server is ${interaction.guild?.name} and has ${interaction.guild?.memberCount} members.`,
		);
	},
};

export default getServerInfo;
