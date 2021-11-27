const Discord = require('discord.js')
const translate = require('@vitalets/google-translate-api')

exports.run = (client, message, args) => {
const dil = args[0]
const yazi = args.slice(1).join(' ')
if(!dil) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`**Dil Kısaltmasını(tr gibi) Lütfen Yazınız**`)
)
if(!yazi) return message.channel.send(
    new Discord.MessageEmbed()
    .setDescription(`**Yazınızı Yazınız.**`)
)

translate(yazi, {to: dil}).then(res => {
    message.channel.send(
        new Discord.MessageEmbed()
        .setDescription(`
        **Çeviri Edilecek Dil: ${dil}**
        **Çeviri Edilecek Yazı: ${yazi}**
        **Çeviri Edilecek Yazının Çevrilmiş Hali: ${res.text}**
        `)
    );
}).catch(err => {
    message.channel.send(
        new Discord.MessageEmbed()
        .setDescription(`**Çok Kötü Bir Hatayla Karşılaştık! (Yanlış Dili Girdiniz Galiba! Yada Bu Yazdığınız Dil Desteklenmiyo!)**`)
    )
    console.error(err);
});    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ceviri", "translate"],
    permLevel: 0
}

exports.help = {
    name: "çeviri"
}
