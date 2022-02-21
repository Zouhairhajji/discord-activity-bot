const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");
const prefix = "!=";


client.commands = new Enmap();


client.on('message', message => {
  const shouldIgnoreMsg = !message.content.startsWith(prefix) || message.author.bot
  if(shouldIgnoreMsg) return
  const args = message.content.slice(prefix).split(/ */)
  const command = args.shift().toLowerCase();


  message.channel.send("nique ta mere")
})


client.login(process.env.TOKEN);
