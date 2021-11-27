

module.exports.run = async (client, message) => {
    const { channel } = message.member.voice;
    if (!channel) {
     
      return message.channel.send("Herhangi bir ses kanalında olmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Kuyrukta bir şarkı bulamadım.");
    }

    message.channel.send(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["q"],
  permLevel: 0
};

exports.help = {
  name: "sıra",
  description: "yardım",
  usage: "sıra"
};
