const { Client, Collection } = require('discord.js');
const bot = new Client();
const { token } = require(`./botconfig.json`);
const { prefix } = require(`./config.json`);
[`aliases`, `commands`].forEach(x => bot[x] = new Collection());
["command", "events"].forEach(x => require(`./handlers/${x}`)(bot));
bot.login(ODMzODI0MDIyNjI1NTE3Njg5.YH39Ig.o7CHFAktgd3uaY364AWE2LcB9DI);
