const Discord = require("discord.js");
const prefix = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("Ready")
  bot.user.setGame("!help", 'https://go.twitch.tv/zatrix15')
});

bot.on('message', message => {
	
	//let userName = message.member.user.username;
	
	//let messageArray = message.content.split(" ");
	//let command = messageArray[0];
	//let args = messageArray.slice(1);
	
	//if(!command.startsWith(prefix)) return;
	
	var args2 = message.content.substring(prefix.length).split(" ");
	const command2 = args2.shift().toLowerCase();
	
	var args3 = message.content.substring(prefix.length).split(", ");
	const command3 = args3.shift().toLowerCase();
	
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	//let messageArray = message.content.split(" ");
	//let command2 = messageArray[0];
	//let split = split.slice(1);
	
	//message.channel.sendMessage(messageArray);
	//message.channel.sendMessage(command);
	//message.channel.sendMessage(args);
	
	noMoreMusic = 0;
	
	notagif = 0;

    let song = args.join(' ')
	
	//if (message.author.equals(bot.user)) return;
	
	if (!message.content.startsWith(prefix)) return;
	/* si le message ne commance par le prefix le reste du code ne s'execute pas*/
	
	if(command === "oniisan")
	{
		
		if(message.author.id === "180703627504123904")
				{
					message.channel.sendMessage("yes imoutosan ?");
				}
			else
				{
					message.channel.sendMessage("You're not my sister >:(");
				}
	}
});

bot.login("Mzk5NjY2ODI5ODA0NTY4NTc2.DTQaTA.J8q5buerrp5awRSVh7TID7VPIkQ");
