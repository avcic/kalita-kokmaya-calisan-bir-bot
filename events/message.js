const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
module.exports = async message => {
  let client = message.client
  if (message.author.bot) return
  if (!message.content.startsWith(ayarlar.prefix)) return
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length)
  let params = message.content.split(' ').slice(1)
  let perms = client.elevation(message)
  let cmd
  if (client.komutlar.has(command)) {
    cmd = client.komutlar.get(command)
  } else if (client.aliases.has(command)) {
    cmd = client.komutlar.get(client.aliases.get(command))
  }
  if (cmd) {
    if(message.author.id !== ayarlar.sahip) {
    const player = db.fetch(`karaliste.${message.author.id}`)
    if(player) return message.channel.send(
      new Discord.MessageEmbed()
      .setDescription(`**Bu Botu Kullanamazsın Çünkü Kara Listedesin**`)
    )
}
  }
  if(cmd && cmd.help.name !== 'bakım-modu') {
    const neblmölçmedimikamk = await require('quick.db').fetch(client.user.id);
    if(neblmölçmedimikamk == true) {
    var DURATION = require('humanize-duration');
    const chimped = await db.fetch(client.user.id+':)');
    var TIMESTAMP = Date.now() - chimped.time;
    var RESULT = DURATION(TIMESTAMP, { language: 'tr', round: true, conjunction: ', ', serialComma: false });
    message.react('❌');
    return message.reply(`***${client.user.username}*** şu anda bakımda.\nYaklaşık ***${RESULT} önce*** bakıma alınmış.\nBakıma alan: ***${chimped.author.tag}***`);
    };
    };
  if (cmd) {
   if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()
                    .setDescription(`:x: **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
      }
    }
    
    if (cmd.conf.permLevel === 1) {
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                const embed = new Discord.MessageEmbed()
                    .setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
                message.channel.send({embed})
                return
            }
        }
        if (cmd.conf.permLevel === 2) {
            if (!message.member.hasPermission("KICK_MEMBERS")) {
                const embed = new Discord.MessageEmbed()
                    .setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
            }
        }
    if (cmd.conf.permLevel === 3) {
            if (!message.member.hasPermission("BAN_MEMBERS")) {
                const embed = new Discord.MessageEmbed()
                    .setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
            }
        }
        if (cmd.conf.permLevel === 4) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                const embed = new Discord.MessageEmbed()
                    .setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
            }
        }
        if (cmd.conf.permLevel === 5) {
            if (!ayarlar.sahip.includes(message.author.id)) {
                const embed = new Discord.MessageEmbed()
                    .setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
            }
        }
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms)
  }
}