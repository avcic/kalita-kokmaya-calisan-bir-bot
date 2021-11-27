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
             .addField(`>  **${prefix}avatar**`,`Etiketlediniz Veya Kendiniz İcin Profilin Avatarınızı Göstermek İcindir`, true)
             .addField(`>  **${prefix}profil**`,`Etiketlediniz Veya Kendiniz Profilinizi Bilgilerini Göstermek İcindir`, true)
             .addField(`>  **${prefix}rol-bilgi**`,`Etiketlediniz Rolun Bilgilerini Göstermek İcindir`, true)
             .addField(`>  **${prefix}roller**`,`Serverdaki Bütün Rolleri Göstermek İcindir`, true)
             .addField(`>  **${prefix}afk**`,`Yazdınız Sebep Yazarak Afk Kalmanız İcindir`, true)
             .addField(`>  **${prefix}emoji-indir**`,`Yazdınız Emoji İsmini İndirir Ve Ziplemek İcindir`)
             .addField(`>  **${prefix}docs**`,`Yazdınız Bir Yazıyı Discord Docsda Aratır Ve Linkini Göstermek İcindir`, true)
             .addField(`>  **${prefix}tdk**`,`Yazdınız Bir Cümleyi Size Tdkda Aratır Ve Düzgün Yazıyla Anlatmak İcindir`, true)
             .addField(`>  **${prefix}emoji-ekle**`,`Yazdınız Bir Emoji Linkini Sunucunuza Eklemek İcindir`, true)
             .addField(`>  **${prefix}günlük-burc-yorumu**`,`Günlük Değişen Yazı İle Size Burc Yorumlarını Göstermek İcindir`, true)
             .addField(`>  **${prefix}atasözü**`,`Bot Size Atasözü Söylemesi İcindir`, true)
             .addField(`>  **${prefix}cihaz**`,`Etiketlediniz Kişinin Hangi Cihazla Girdiğini Göstermek İcindir`, true)
             .addField(`>  **${prefix}hesap-makinesi**`,`Butonlarla Sayısal İşlemler Yapmak İcindir`, true)
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
    name : 'kullanıcı',
    description : 'Komut Gösterir atar',
    usage : 'kullanıcı'
}