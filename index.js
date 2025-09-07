const {Client, Events, GatewayIntentBits, Collection} = require('discord.js');
const { token } = require('./config.json');

const fs = require('node:fs');
const path = require('node:path');

// créer une nouvelle instance
const client = new Client({ intents:[GatewayIntentBits.Guilds]});

client.once(Events.ClientReady, readyClient => {
    console.log(`Connection : ${readyClient.user.tag}`);
});

client.commands = new Collection();

client.login(token);