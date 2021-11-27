const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {

const embed = new MessageEmbed()
.setColor('#CC0000')
.addField('Selam Bana Bağış Yapacaksın Dememkki? HMMM Aşşağıda Bulunuyor Gönlünden Ne Koparsa Tşk Ederim','4785 0027 8459 4995')
.setFooter('Güllü Destek İle Devam Edicek')
message.channel.send(embed)
}
exports.conf = {
    enabled:true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}
exports.help = {
  name: 'bağış',
  description: '',
  usage: ''
} 