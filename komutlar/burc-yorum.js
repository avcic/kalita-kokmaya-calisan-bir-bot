const Discord = require('discord.js');
const burc = require('burc.js'); // https://www.npmjs.com/package/burc.js

exports.run = async (client, message, args, db) => {
  if (!args[0]) return message.channel.send("Günlük yorum alabilmek için bir burç ismi girmelisin.")
let msg = await message.channel.send("Lütfen bekleyiniz veriler çekiliyor..")
let burcumuz = await burc.gunluk(args[0])
let embed = new Discord.MessageEmbed()
.setAuthor("Günlük Burç Yorumu", message.author.displayAvatarURL({dynamic:true}))
.setDescription(burcumuz)
.setFooter(""+message.author.username+"#"+message.author.discriminator+" tarafından istendi.")
.setImage("http://www.haberasir.com/files/uploads/news/thumb/5-ekim-2019-cumartes-b79ed975a0b796c4c772.png")
.setTimestamp()
msg.edit("",{embed:embed})
}
exports.conf = {  
  enabled: true,
  guildOnly: true,
  aliases: ["günlük-burç-yorumu","günlükburçyorumu"],
  permLevel: 0,
  kategori: "geliştirici"
};

exports.help = {
  name: 'günlük-burc-yorumu',
  description: "Günlük olarak değişen burç yorumları alırsınız.",
  usage: 'günlük-burc-yorumu '
}