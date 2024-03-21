const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Mimic input in selected channel')

        .addStringOption(option =>
            option
                .setName('input')
                .setDescription('Input message')
                .setRequired(true))


        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('Channel to echo into')
                .setRequired(true))

        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),


    async execute(interaction) {
        // if (!interaction.isCommand()) return;

        const input = interaction.options.getString('input');

        const channel = interaction.options.getChannel('channel');

        // const channel = client.channels.cache.get('channel');
        await interaction.deferReply({ ephemeral: true });
        await wait(1_000);
        await channel.send(input);
        await interaction.followUp('[ Echo successful ]');
    },
};