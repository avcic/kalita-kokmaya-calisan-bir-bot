const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '774591026940739585') return message.reply('Yeterli değil kardeşim! ');
      const sayMessage = args.join(` `);
      client.user.setActivity(sayMessage);
      message.channel.send(`Oyun Adı **${sayMessage}** olarak değiştirildi :ok_hand:`)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyun',
  description: 'Botun pingini gösterir.',
  usage: 'oyun'
};