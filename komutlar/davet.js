const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setColor("#FB8C00")
    .setAuthor(`Güllü Linkleri`, client.user.avatarURL())
    .setDescription(
      "**• [Davet Et.](https://discord.com/api/oauth2/authorize?client_id=784517399314432050&permissions=8&scope=bot)**\n\n**• [Oy Ver](https://top.gg/bot/784517399314432050)**\n\n**• [Destek Sunucusu](https://discord.gg/RvPfmr6CCx)**\n\n**• [Sitesi](https://gullubot.ga/)**"
    )
    .setFooter(`${message.author.username} asked by!`)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL());
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "yardım",
  usage: "davet"
};
