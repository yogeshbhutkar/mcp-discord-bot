import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

const getUserInfo = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction: ChatInputCommandInteraction) {
		await interaction.reply(`Howdy, ${interaction.user.username}! 👋\n`);
	},
};

export default getUserInfo;
