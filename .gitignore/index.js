const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Zatrix, !help");
	
	console.log("ready");
});

bot.login("Mzk5NjY2ODI5ODA0NTY4NTc2.DTQaTA.J8q5buerrp5awRSVh7TID7VPIkQ");
