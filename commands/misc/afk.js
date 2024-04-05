const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('afk')
        .setDescription('Signal that you are AFK'),
    async execute(interaction) {
        // interaction.guild is the object representing the guild it was ran on
        await interaction.deferReply();
        await wait(1_000);
        const nick = interaction.member.nickname;

        // check if user has a nickname or not
        if (nick == null) {
            interaction.member.setNickname(interaction.user.username + '[AFK]');
        } else {
            interaction.member.setNickname(interaction.member.nickname + '[AFK]');

        }
        const user = interaction.user;
        await interaction.followUp('[!] <@' + user + '> has been set to AFK');
    },
};