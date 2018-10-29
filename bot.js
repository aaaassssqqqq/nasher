const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(``);
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
//مهما كنت صامت فأنا لا أجرح

client.login(process.env.BOT_TOKEN);
