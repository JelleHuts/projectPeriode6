const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('warn')
		.setDescription('voor al mijn neven die niet willen luisteren'),
};