const Discord = require("discord.js");


exports.run = (client, message, args) => {
  const kurallar = new Discord.MessageEmbed()
    .setDescription(`**ProfileLand Rules,Kurallar**

PROFİLE LAND UYE KURALLARI 

• 1:  Din ve dil ayrımı yapmak yasaktır.
• 2:  Kişisel sorunları sunucuya yansıtmak yasaktır.
• 3:  İnsanları yaşına göre yargılamak yasaktır.
• 4:  Spam , Caps ve Flood yapmak yasaktır.
• 5:  Kişisel bilgilerin paylaşımı yasaktır.
• 6:  Üyelerin birbirlerine ağır hakaretlerde bulunması yasaktır.
• 7:  Siyaset yapmak ve insanların siyasi görüşüyle dalga geçmek yasaktır.
• 8:  Discord sunucusu reklamı yapmak yasaktır
• 9:  +18 içerik paylaşımı yasaktır.
• 10:  Sesli odalarda ses değiştirme programı veya Bass kullanımı yasaktır.
• 11:  Sunucu içerisinde alım veya satım işlemi yapmak yasaktır.
• 12:  Link paylaşımı yapmak yasaktır.
🇹🇷
  PROFILE LAND MEMBER RULES 

• 1:  Religion , discrimination and race are prohibited.
• 2:  It is forbidden to post personal matters on the server.
• 3:  It is forbidden to judge people according to their age.
• 4:  Spam, Caps and Flood are prohibited.
• 5:  Sharing personal information is prohibited.
• 6:  Members are prohibited from serious insults to each other.
• 7:  It is forbidden to do politics and make fun of their political views.
• 8:  It is forbidden to advertise Discord server.
• 9:  +18 content sharing is prohibited.
• 10:  It is forbidden to use a voice changing program or Bass in the rooms.
• 11:  Trading within the server is prohibited.
• 12:  Link sharing is prohibited. 
🇬🇧 `)
    .setColor("BLACK")
    .setFooter(`${message.guild.name}`)
  message.channel.send(kurallar);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"qüwfpqfo0qjfqfıhqu9hfwqfqfqlkfwpqofjqpoıwfjwq" // BOT KURALLARI ATTIKTAN SONRA BURAYI BU YAP ÖRNEK : DPĞWEFEWĞFK34*34T4*G04*G BU YAP YOKSA HERKEZ  KULLANIR.
}