const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("online"); //online :cevirmici  idle: boşta dnd: rahatsız etmeyin olarak deiştirebilirsiniz
  var oyun = [
    `g?yardım`,
    `g?kullanıcı`,
    `Veriler Sıfırlandı`,
    `Güllü`,
    
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 3) + 0);

    client.user.setActivity(oyun[random], "");
  }, 1 * 4500);
};