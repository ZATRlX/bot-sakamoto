const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const request = require('request');
const getYouTubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyCPCUsqY4I55P2AN76KR68T6hmkGYCjCnc";
const prefix = "!";

var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Ready")
  bot.user.setGame("!help", 'https://go.twitch.tv/zatrix15')
});

bot.login("Mzk5NjY2ODI5ODA0NTY4NTc2.DTQaTA.J8q5buerrp5awRSVh7TID7VPIkQ");
