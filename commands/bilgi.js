const Discord = require("discord.js");


exports.run = (client, message, args) => {
  const bilgi = new Discord.MessageEmbed()
    .setDescription(`**ÖNEMLİ KANALLAR**

•<#995091236052541521> **Mağazamızdır,Burdan İstediğinizi Satın Alabilirsiniz.**
•<#995091312225300521> **Saatlik Çekiliş Kanalıdır.**
•<#995419279010844673> **Günlük Çekiliş Kanalıdır.**
•<#998558075495657642> **Emojiye ilk basan çekilişin sahibi olur.**
•<#996578831496380477> **Büyük Çekilişlerin Olduğu Kanaldır ve ya Toplu.**

•<#995091317560455239> **Çekilişleri Verdiğimizin Kanıtlarının Olduğu Kanaldır.**     
•<#995443520263426048> **Yaptığımız Satışların Kanıtlarının Fotoğrafları.**  

`)
    .setColor("RANDOM")
    .setFooter(`${message.guild.name}`)
  message.channel.send(bilgi);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"bilgi" 
}