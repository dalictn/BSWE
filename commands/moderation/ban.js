const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a user from the guild')

        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('User to be banned')
                .setRequired(true))


        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('Reason for ban')
                .setRequired(false))

        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers | PermissionFlagsBits.KickMembers)
        .setDMPermission(false),


    async execute(interaction) {
        await interaction.deferReply();
        const user = interaction.options.getUser('target');
        await wait(1_000);
        await interaction.guild.members.ban(user);
        const reason = interaction.options.getString('reason');
        if (reason === null) {
            await interaction.followUp('[!] User <@' + user + '> banned ');
        }
        else {
            await interaction.followUp('[!] User <@' + user + '> banned. Reason: ' + reason);
        }
    },
};