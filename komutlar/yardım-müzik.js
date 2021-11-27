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
             .addField(`>  **${prefix}oynat**`,`Müzik Oynatmak İcindir`, true)
             .addField(`>  **${prefix}duraklat**`,`Müziki Durdurmak İcindir`, true)
             .addField(`>  **${prefix}devamet**`, `Müziki Devam Etirmek İcindir`, true)
             .addField(`>  **${prefix}atla**`, `Müziki Sırasını Atlamak İcindir`, true)
             .addField(`>  **${prefix}sıra**` , `Müzikin Sırasını Göstermk İcindir`)
             .addField(`>  **${prefix}döngü**`, `Müziki Sınırsız Döngüye Almak İcindir`, true)
             .addField(`>  **${prefix}lyrics**`, `Müzikin Sözlerini Göstermek İcindir`, true)
             .addField(`>  **${prefix}np**`, `Ne Çaldığını Görmek İcindir`, true)
             .addField(`>  **${prefix}gir**`, `Botu Sesli Kanalına Girdirmek İcindir`, true)
             .addField(`>  **${prefix}ayrıl**`, `Botu Sesli Kanalında Çıkarmak İcindir`, true)
             .addField(`Linkler`, `[Davet Et](https://discord.com/api/oauth2/authorize?client_id=784517399314432050&permissions=8&scope=bot) **|** [Oy Ver](https://top.gg/bot/784517399314432050/vote) **|** [Destek Sunucusu](https://discord.gg/RvPfmr6CCx) **|** [Sitesi](https://gullubot.ga/)`)
             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
             .setImage('https://cdn.discordapp.com/attachments/833434425197854730/864772914866683904/banner.png')
            
            return message.channel.send(gullu);
}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : [''],
    permLevel : 0
}

exports.help = {
    name : 'müzik',
    description : 'Komut Gösterir atar',
    usage : 'müzik'
}