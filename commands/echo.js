const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Echoes input in a given channel'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};