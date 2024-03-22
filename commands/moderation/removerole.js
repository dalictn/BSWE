const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('rmrole')
        .setDescription('removes a role from a user')

        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('User to remove role from:')
                .setRequired(true))


        .addRoleOption(option =>
            option
                .setName('role')
                .setDescription('Role to be removed: ')
                .setRequired(true))

        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
        .setDMPermission(false),


    async execute(interaction) {
        await interaction.deferReply();
        const user = interaction.options.getMember('user');
        const role = interaction.options.getRole('role');

        await wait(1_000);
        await user.roles.remove(role);

        await interaction.followUp('[!] Role <@' + role + '> removed removed from <@' + user + '>.');
    },
};