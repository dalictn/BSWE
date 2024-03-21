const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`All systems initialized. Logged in as ${client.user.tag}`);
    },
};