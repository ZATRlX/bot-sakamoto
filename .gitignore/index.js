const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() => {
  console.log("Ready")
  bot.user.setGame("!help", 'https://go.twitch.tv/zatrix15')
});

bot.login("Mzk5NjY2ODI5ODA0NTY4NTc2.DTQaTA.J8q5buerrp5awRSVh7TID7VPIkQ");
