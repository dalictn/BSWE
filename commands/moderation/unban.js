const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('unban')
        .setDescription('unbans a user from the guild')

        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('User to be unbanned')
                .setRequired(true))


        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('Reason for unban')
                .setRequired(false))

        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers | PermissionFlagsBits.KickMembers)
        .setDMPermission(false),


    async execute(interaction) {

        await interaction.deferReply();
        const user = interaction.options.getUser('target');
        // const channel = interaction.options.getChannel('channel');
        // const channel = client.channels.cache.get('channel');
        await wait(1_000);
        await interaction.guild.members.unban(user);
        await interaction.followUp('[ User <@' + user + '> has been unbanned ]');
    },
};
