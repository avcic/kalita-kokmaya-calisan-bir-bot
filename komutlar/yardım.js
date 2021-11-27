const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

var versiyon = ayarlar.version

exports.run = async(client, message, args) => {

        const gullu = new Discord.MessageEmbed()

             .setColor('#4527A0')
             .setTitle(`Yardım Menusu`)
             .setAuthor(`Güllü`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .setDescription(`Beni Kullanıdığın İcin Teşekkürler <@${message.author.id}> \n \n Bu Sunucudaki Prefixim : ${prefix} \n Versiyonum : ${versiyon} \n Pingim : ${client.ws.ping} `)
             .addField(`>  **${prefix}müzik**`,`Müzik Komutlarını Listeler`, true)
             .addField(`>  **${prefix}müzik2**`,`Müzik 2 Komutlarını Listeler`, true)
             .addField(`>  **${prefix}moderasyon**`,`Moderasyon Komutlarını Listeler`, true)
             .addField(`>  **${prefix}sistemler**`, `Sistemler Komutlarını Gösterir`, true)
             .addField(`>  **${prefix}kullanıcı**`, `Sunucu Ve Kullanıcı Komutlarını Listeler`, true)
             .addField(`>  **${prefix}eğlence**`, `Eğlence Komutlarını Listeler`, true)
             .addField(`>  **${prefix}sponsor**` , `Sponsor Komutlarını Listeler`, true)
             .addField(`>  **${prefix}sahip**`, `Sahibinin Komutlarını Listeler`, true)
             .addField(`>  **${prefix}bot**`, `Botun Komutlarını Listeler`, true)
             .addField(`Linkler`, `[Davet Et](https://discord.com/api/oauth2/authorize?client_id=784517399314432050&permissions=3147776&scope=bot) **|** [Oy Ver](https://top.gg/bot/784517399314432050/vote) **|** [Destek Sunucusu](https://discord.gg/RvPfmr6CCx) **|** [Sitesi](https://gullubot.ga/)`)
             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
             .setImage('https://cdn.discordapp.com/attachments/833434425197854730/864772914866683904/banner.png')
            
        return message.channel.send(gullu);
}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['y','help'],
    permLevel : 0
}

exports.help = {
    name : 'yardım',
    description : 'Komut Gösterir atar',
    usage : 'yardım'
}