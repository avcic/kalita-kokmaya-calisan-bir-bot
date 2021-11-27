const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
const osutils = require('os-utils');
const os = require('os');
require("moment-duration-format");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
    
exports.run = async (client, message, args) => {
let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || ayarlar.prefix;
  
  let linkler = await db.fetch(`linkler`)
    const duration = moment.duration(client.uptime).format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");
    osutils.cpuUsage(function(v) {
    const istatistikozel = new Discord.MessageEmbed()
.setColor('#4A148C') 
.setAuthor('Güllü İstatistik')
.addField("| Bot Bilgileri", `\n Geliştirici: <@774591026940739585> \n Sunucu Sayısı: **${client.guilds.cache.size}** \n Kullanıcı Sayısı: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n Kanal Sayısı: **${client.channels.cache.size}** \n Ping: **${client.ws.ping}ms** \n Uptime: **${duration}** \n Kuruluş: **01 Kasım 2019**`,true)
.addField(`| Vds Özellikleri`, ` CPU: **${os.cpus().map(i => `${i.model}`)[0]}** \n CPU kullanımı: **${(v * 100).toString().split(".")[0] + "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]}%** \n VPS Çekirdekleri: **${osutils.cpuCount() + " Cores"}** \n Ram Kullanımı: **${(process.memoryUsage().heapUsed / 512 / 512).toFixed(2)}/512MB** \nİşletim Sistemi: **${os.platform()}**`,true)    
.addField("| Modül Bilgileri", `\n Discord.js Versiyon: **v${Discord.version}** \n Node.js Versiyon: **${process.version}** \n Botun Veritabanı: **quick.db** \n Versiyon: **${ayarlar.version}** \nModül sayısı: **31** \n Bulunan Komut Sayısı: **${client.komutlar.size+0}**`)
.addField(`| Diğer bilgiler`, ` DBL Durumu: **Onaylı ** \n Onay durumu: **Onaylı ** \n Veritabanı Durumu: **Temiz :satellite:**`)
.addField(`Linkler`, `[Davet Et](https://discord.com/api/oauth2/authorize?client_id=784517399314432050&permissions=8&scope=bot) **|** [Oy Ver](https://top.gg/bot/784517399314432050/vote) **|** [Destek Sunucusu](https://discord.gg/RvPfmr6CCx) **|** [Sitesi](https://gullubot.ga/)`)
.setImage(`https://cdn.discordapp.com/attachments/833434425197854730/864772914866683904/banner.png`)
.setFooter('Güllü', message.author.avatarURL({dynamic:true}))
.setThumbnail(client.user.avatarURL())
.setTimestamp()
message.channel.send(istatistikozel)
    })   
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['statistic','i','istatistik'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'stats',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'stats'
};
