const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`طفشان');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});


client.login(process.env.BOT_TOKEN);
