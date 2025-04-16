import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

const initiateWingman = {
	data: new SlashCommandBuilder()
		.setName('wingman')
		.setDescription('Initiate a wingman command!')
		.addStringOption((option) =>
			option
				.setName('prompt')
				.setDescription('The prompt to send to the wingman command')
				.setRequired(true),
		),
	async execute(interaction: ChatInputCommandInteraction) {
		const prompt = interaction.options.getString('prompt', true);
		await interaction.reply(prompt);
	},
};

export default initiateWingman;
