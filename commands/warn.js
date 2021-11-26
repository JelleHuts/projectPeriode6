const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('warn')
		.setDescription('voor al mijn neven die niet willen luisteren'),
		async execute(interaction) {
			await interaction.reply('Helaas is dit niet gelukt');
		},
};