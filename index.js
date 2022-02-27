const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const config = require("./config.json");
const admin = require('firebase-admin'); 
 

admin.initializeApp({
  credential: admin.credential.cert(config.serviceAccount)
});
const db = admin.firestore(); 
const colActivities = db.collection('activity');




const client = new Discord.Client();
client.commands = new Enmap();
const prefix = "!=";





client.on('message', message => {
  if (message.author.bot) return;
  //const shouldIgnoreMsg = !message.content.startsWith(prefix) || message.author.bot
  //if(shouldIgnoreMsg) return
  //const args = message.content.slice(prefix).split(/ */)
  //const command = args.shift().toLowerCase();

  colActivities.add(
    {
      last_activity: new Date(),
      event_type: 'MESSAGE',
      userId: message.author.id,
      userName: message.author.tag
    }
  )
  

  
  //message.channel.send(" ->" + message.content)
})
 
var http = require("http");
  setInterval(function() {
    http.get("https://lafamax-discord-bot.herokuapp.com/");
}, 300000);

client.login(process.env.TOKEN);
