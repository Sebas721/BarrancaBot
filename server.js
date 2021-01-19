const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Epic'));
bot.command('tumae', (ctx) => ctx.reply('La tuya'));

bot.launch();
