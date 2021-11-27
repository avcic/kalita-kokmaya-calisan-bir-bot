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
             .addField(`>  **${prefix}roblox**`,`Roblox Sitesinden Profil Bulmak İcindir`, true)
             .addField(`>  **${prefix}mcbody**`,`Minecraftdaki Karakterlerin Skini Göstermek İcindir`, true)
             .addField(`>  **${prefix}minecraft-sunucu-bilgi**`,`Minecraft İp Yazarak Sunucu Durumunu Görmek İcindir`, true)
             .addField(`>  **${prefix}çeviri**`,`Bişeyler Çevirmek İcindir`, true)
             .addField(`>  **${prefix}spotify**`,`Etiketlediniz Kişi Spotify Dinliyosa Göstermek İcindir`, true)
             .addField(`>  **${prefix}boğazla**`,`Etiketlediniz Kişiyi Boğazlamak İcindir`, true)
             .addField(`>  **${prefix}panda**`,`Rastgele Panda Resimleri Göndermek İcindir`, true)
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
    name : 'eğlence',
    description : 'Komut Gösterir atar',
    usage : 'eğlence'
}