const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides information about the server.'),
    async execute(interaction) {
        // interaction.guild is the object representing the guild it was ran on
        await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guid.memberCount} members.`);
    },
};