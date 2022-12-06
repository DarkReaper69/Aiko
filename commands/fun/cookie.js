const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "cookie",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: ({client, message, args}) => {

        let responses = ["https://media.discordapp.net/attachments/938426992427147274/938427473568346142/cookie_5.gif",
          "https://cdn.discordapp.com/attachments/938426992427147274/938427474126196776/cookie_6.gif",
          "https://cdn.discordapp.com/attachments/938426992427147274/938427474419777546/cookie_1.gif",
          "https://cdn.discordapp.com/attachments/938426992427147274/938427474902130788/cookie_2.gif",
          "https://media.discordapp.net/attachments/938426992427147274/938427475392868352/cookie_3.gif",
          "https://media.discordapp.net/attachments/938426992427147274/938427475954896937/cookie_4.gif"];
        
        let randomArray = responses[~~(Math.random() * responses.length)];

        const target = message.mentions.users.first();
        if (!target) return message.channel.send(`Mention the user you want to give cookie to`);
        const memberTarget = message.guild.members.cache.get(target.id);

        const embed = new MessageEmbed()
            .setTitle("Woh! COOOKIIESS")
            .setDescription(` ${message.author.tag} gave ${target} a cookie!`)
            .setImage(url=`${randomArray}`)
            .setColor("BLUE") 

            .setTimestamp();
            message.channel.send({ embeds: [embed] });
    },
  };