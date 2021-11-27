const Discord = require("discord.js");
const client = new Discord.Client();
require('discord-buttons')(client);
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const db = require("quick.db");
const http = require("http");
const express = require("express");
const request = require("request");
const snekfetch = require("snekfetch");
require("./util/eventLoader.js")(client);
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
client.queue = new Map();


var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`${client.user.tag} adı ile giriş yapıldı!`);
});

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.komutlar = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.komutlar.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.komutlar.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.komutlar.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.komutlar.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.komutlar.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

////////////////////////////////
client.on("guildCreate", async ghostabbb => {
  const kanal = new Discord.WebhookClient(
   "857935165364240397",
    "NJm5G5DgJ3H4I25BeZkTeWikGeFBFQX08660Hi6SQt1IIS_ON-xMGYDkOtiZQfsKmaNX"
  );
  let ghostabb = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("**Bot Eklendi!**")
    .addField("Sunucu Adı:", ghostabbb.name)
    .addField("Sunucu İD:", ghostabbb.id)
    .addField("Sunucu sahibi", ghostabbb.owner)
    .addField("Sunucu Sahibi'nin ID'si", ghostabbb.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", ghostabbb.region)
    .addField("Sunucudaki Kişi Sayısı:", ghostabbb.memberCount)
  .setTimestamp()
  kanal.send(ghostabb);
});
client.on("guildDelete", async ghostbruhh => {
  const kanal = new Discord.WebhookClient(
    "857935165364240397",
    "NJm5G5DgJ3H4I25BeZkTeWikGeFBFQX08660Hi6SQt1IIS_ON-xMGYDkOtiZQfsKmaNX"
  );
  let ghostbruh = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("**Bot Atıldı!**")
    .addField("Sunucu Adı:", ghostbruhh.name)
    .addField("Sunucu İD:", ghostbruhh.id)
    .addField("Sunucu sahibi", ghostbruhh.owner)
    .addField("Sunucu Sahibi'nin ID'si", ghostbruhh.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", ghostbruhh.region)
    .addField("Sunucudaki Kişi Sayısı:", ghostbruhh.memberCount)
  .setTimestamp()
  kanal.send(ghostbruh);
});
//////////////////////////////
client.on("message",async message => {
if(message.content == "<@784517399314432050>" || message.content == "<@!784517399314432050>") {
let ghostab;

if(db.has(`prefix_${message.guild.id}`)) {
  ghostab = db.fetch(`prefix_${message.guild.id}`);
} else {
  ghostab = ayarlar.prefix;
}
let ghost = new Discord.MessageEmbed()
.setTitle("Güllü | Etiket Prefix")
.setDescription(`Beni Kullandığın İcin Teşekkürler <@${message.author.id}> \n \n Yardımdaki Kategorilerin Kaçtane Sayı Olduğunu Gösterir \n \n > Müzik Komutları \n [${ghostab}müzik](https://discord.gg/RvPfmr6CCx) (10) \n \n > Müzik2 Komutları \n [${ghostab}müzik2](https://discord.gg/RvPfmr6CCx) (4) \n \n > Moderasyon Komutları \n  [${ghostab}moderasyon](https://discord.gg/RvPfmr6CCx) (4) \n \n > Sistem Komutları \n [${ghostab}sistemler](https://discord.gg/RvPfmr6CCx) (1) \n \n > Kullanıcı Komutları \n [${ghostab}kullanıcı](https://discord.gg/RvPfmr6CCx) (13) \n \n > Eğlence Komutları \n [${ghostab}eğlence](https://discord.gg/RvPfmr6CCx) (7) \n \n > Sponsor Komutları \n [${ghostab}sponsor](https://discord.gg/RvPfmr6CCx) (1) \n \n > Sahip Komutları \n [${ghostab}sahip](https://discord.gg/RvPfmr6CCx) (5) \n \n > Bot Komutları \n [${ghostab}bot](https://discord.gg/RvPfmr6CCx) (3) \n \n > Yardım Komutu \n [${ghostab}yardım](https://discord.gg/RvPfmr6CCx) \n \n Linkler \n [Davet Et](https://discord.com/api/oauth2/authorize?client_id=784517399314432050&permissions=3147776&scope=bot) **|** [Oy Ver](https://top.gg/bot/784517399314432050/vote) **|** [Destek Sunucusu](https://discord.gg/RvPfmr6CCx) **|** [Sitesi](https://gullubot.ga/)`)
.setFooter(`Güllü`,client.user.displayAvatarURL())
.setTimestamp()
message.channel.send(ghost)
}
})
////////////////////////////////

////////////////////////////////
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply("**Aleyküm Selam Hoşgeldin.**");
    }
  }
});
///////////////////////////////
client.on("message" , async msg => {
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return;
 
  let afk = msg.mentions.users.first()
 
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
 
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){
 
       msg.reply(`Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){
 
       msg.reply(`Ya Özledim Nerdesin`)
  db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
  db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
   msg.member.setNickname(isim)
   
 }
 
});
///////////////////////////////
client.on('message', async message => {
  let preuyegifleri = ['https://media.giphy.com/media/gf6iP1NIcDk7S/giphy.gif', 'https://media.giphy.com/media/3o7btXkbsV26U95Uly/giphy.gif', 'https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif', 'https://media.giphy.com/media/xUPGcCr9KtulU3dFm0/giphy.gif', 'https://media.giphy.com/media/3oKIPzlKw7xjYwaIww/giphy.gif', 'https://media.giphy.com/media/bwLI2JHYHpD4c3UosX/giphy.gif'];
  let resultpre = Math.floor((Math.random() * preuyegifleri.length));
  let yashinu = await db.get(`premiumuye_${message.author.id}`);
  if(!yashinu) return
  await db.add(`premiumuye_${message.author.id}`, 1)
  if(yashinu >= 50) {
    const botclub = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor("Evet! İşte kralınız;", client.user.avatarURL()())
    .setDescription(`Sunucunuzda Premium Üye Bulunduğunu Biliyor Muydunuz?? => ${message.author}`)
    .setThumbnail(preuyegifleri[resultpre]);
    await db.set(`premiumuye_${message.author.id}`, 1)
    message.channel.send(botclub).then(a => a.delete(20000))
  }
});
///////////////////////////////
client.on("guildMemberAdd", async member => {
  let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
  let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);

  let kanal = member.guild.channels.cache.get(kanal1);
  let rol = member.guild.roles.cache.get(rol1);

  if (!kanal) return;
  if (!rol) return;

  const salvo3 = new Discord.MessageEmbed()

    .setColor("BLACK")
    .setDescription(`Sunucuya Katılan **${member}** İsimli Kullanıcıya Başarıyla \`${rol.name}\` Rolü Verildi.`);

  kanal.send(salvo3);
  member.roles.add(rol);
}); 
///////////////////////////////
client.on('messageDelete', message => {
  const data = require("quick.db")
  data.set(`snipe.mesaj.${message.guild.id}`, message.content)
  data.set(`snipe.id.${message.guild.id}`, message.author.id)

})
///////////////////////////////
const { AutoPoster } = require('topgg-autoposter')

const poster = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3MjQ2NTU0Mzk5NTA2NDM0MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIyNjQwNzY0fQ.2bqBpKm_qrs70JtdlBP25hXWuW2I6daWEQU-0nTB8rk', client) // your discord.js or eris client

// optional
poster.on('posted', (stats) => { // ran when succesfully posted
})
/////////////////////////////////
////////////////////////////////
