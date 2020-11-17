const discord = require("discord.js");
const config = require("./config.json").config;
const bot = new discord.Client({
  disableEveryone: true
});
const lib = require("./lib/functions");

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

lib.setup(bot);

module.exports.bot = bot;

bot.login(NzQxNzE1NTI0NzU2NzAxMzU3.Xy7maQ.5mS0Y70HZxt953xeRQyHb5Wf0XQ);