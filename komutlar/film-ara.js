const Discord = require('discord.js');
const film = require('film-apisi') //discord.gg/dzXhVR4SDS

exports.run = async (client, message, args) => {
if(!args.join(" ")) return message.reply('Arayacak bir şeye ihtiyacım var.')
let c = await film.ara(args.join(" "))
const embed = new Discord.MessageEmbed() //v11 kullanıyorsanız Discord.RichEmbed() yapınız.
.setColor('RANDOM')
.setTitle(c.ismi)
.setThumbnail(c.poster)
.addField('Yıldızlar:', c.yıldızlar)
.addField('Tür:', c.tür)
.addField('Puan:', c.puan)
.addField('Yıl:', c.yıl)
.addField('Süre:', c.süre)
.addField('Sezon:', c.sezon)
.addField('Bölüm:', c.bölüm)
.addField('Benzer:', c.benzerler)
message.channel.send(embed)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['film-ara'],
    permLevel: 0
}

exports.help = {
    name: 'film-ara',
    description: "imdb den arama yapmanızı sağlar",
    usage: 'film-ara'
}