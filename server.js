const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Epic'));

bot.command('tumae', (ctx) => {
  console.log(`/tumae request from ${ctx.from.username}`);
  ctx.reply('La tuya');
});

bot.hears('Oe bot', (ctx) => {
  console.log(`Heard Oe bot request from ${ctx.from.username}`);
  ctx.reply('Que quieres cabeza de cebolla, te vas a mamar tu muñequera');
});

bot.command('furry', (ctx) => {
  console.log(`/furry bot request from ${ctx.from.username}`);
  ctx.reply('Unknown api: Have you considered commiting suicide?');
});

bot.command('porno', (ctx) => {
  console.log(`/porno request from ${ctx.from.username}`);
  ctx.reply('Unknown api: Have you considered commiting suicide?');
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
