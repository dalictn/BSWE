const { SlashCommandBuilder, guildMember, Guild, Client } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('afk')
        .setDescription('Signal that you are AFK'),
    async execute(interaction) {
        // interaction.guild is the object representing the guild it was ran on
        await interaction.deferreply();
        await wait(1_000);


        //  const name = interaction.user.username;
        // await guildMember.setNickname(name + '[AFK]');
        // await interaction.deferReply();
        // await wait(1_000);
        //await interaction.followUp(guildMember.nickname + ' is AFK');
    },
};