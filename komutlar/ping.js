const Discord = require('discord.js')

exports.run = async (client ,message, args) =>{

  const ping= new Discord.MessageEmbed()
  .setTitle("Delay")
  .setColor("RANDOM")
  .setDescription(`<a:tik:801918861108051998> ${client.ws.ping} ms Botun pingi \n <a:tik:801918861108051998> ${Date.now() - message.createdTimestamp} ms Mesaj Pingi`)
  message.channel.send(ping)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['gecikme'],
 permLevel: 0
};

exports.help = {
 name: 'ping',
 description: 'Botun Pingine Bakarsın',
 usage: 'ping'
};