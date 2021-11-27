const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if(message.author.id !== ayarlar.sahip) return message.channel.send(`Bu komut bot sahibine özeldir!`)
  let premiumuyelog = "854125599919964180";
  
  if(args[0] === "ver") {
    let izex = args.slice(1).join(' ');
    if(!args[1]) return message.channel.send(`Premium Üyelik verilecek kullanıcıyı belirtmelisin! **Doğru Kullanım:**  ${prefix}premium ver <kullanıcı id>`)
    await db.set(`premiumuye_${izex}`, 1)
    message.channel.send(`Belirtilen kullanıcı **Premium Üye** özelliğine sahip oldu!`)
    client.channels.cache.get(premiumuyelog).send(`\`${izex}\` ID'li kullanıcıya premium üye verildi! (${client.users.cache.get(izex).tag})`)
    return 
  }
  
  if(args[0] === "sil") {
    let izex = args.slice(1).join(' ');
    if(!args[1]) return message.channel.send(`Premium Üyeliği alınacak kullanıcıyı belirtmelisin! **Doğru Kullanım:**  ${prefix}premium sil <kullanıcı id>`)
    await db.delete(`premiumuye_${izex}`)
    message.channel.send(`Belirtilen kullanıcıdan **Premium Üye** özelliğine alındı!`)
    client.channels.cache.get(premiumuyelog).send(`\`${izex}\` ID'li kullanıcıya premium üye verildi! (${client.users.cache.get(izex).tag})`)
    return
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pre', 'gold'],
  permLevel: 0
};

exports.help = {
  name: 'premium',
  description: 'Belirtilen kullanıcıya premium/gold üyelik verir/alır.',
  usage: 'premium',
  kategori: 'sahip'
};