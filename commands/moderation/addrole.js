const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('addrole')
        .setDescription('kicks a user from the guild')

        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('User to add role to:')
                .setRequired(true))


        .addRoleOption(option =>
            option
                .setName('role')
                .setDescription('Role to be assigned: ')
                .setRequired(true))

        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
        .setDMPermission(false),


    async execute(interaction) {
        await interaction.deferReply();
        const user = interaction.options.getMember('user');
        const role = interaction.options.getRole('role');

        await wait(1_000);
        await user.roles.add(role);

        await interaction.followUp('[!] User <@' + user + '> given <@' + role + '> role.');
    },
};