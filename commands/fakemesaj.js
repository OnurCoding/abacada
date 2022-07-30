const Discord = require("discord.js");//discord.gg/türkiye

exports.run = async (client, message, args) => {
  await message.delete();
  const csu = message.mentions.users.first();
  const msg = args.slice(1).join(" ");
  if (!csu) return message.reply("Birisini Etiketle!").then(m => m.delete({ timeout: 5000 }));
  if (!msg) return message.reply("Bir Mesaj Yaz!").then(m => m.delete({ timeout: 5000 }));

  const hook = await message.channel//by: Ege#0003
    .createWebhook(csu.username, {
      avatar: csu.avatarURL()
    })
    .then(async a => {
      await a.send(msg);
      a.delete({ timeout: 100 });
    });
};

exports.conf = {
  aliases: [],
  permlevel: 4
};
exports.help = {
  name: "fake-mesaj"
};