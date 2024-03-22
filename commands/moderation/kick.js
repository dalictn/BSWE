const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('kicks a user from the guild')

        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('User to be kicked')
                .setRequired(true))


        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('Reason for kick')
                .setRequired(false))

        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .setDMPermission(false),


    async execute(interaction) {
        await interaction.deferReply();
        const user = interaction.options.getMember('target');
        await wait(1_000);
        await user.kick();
        const reason = interaction.options.getString('reason');

        if (reason === null) {
            await interaction.followUp('[!] User <@' + user + '> kicked from the guild by <@' + '>' + interaction.user);
        }
        else {
            await interaction.followUp('[!] User <@' + user + '> kicked by <@' + interaction.user + '> for:' + reason);
        }
    },
};