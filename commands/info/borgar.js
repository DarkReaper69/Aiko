const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "borgar",
    category: "info",
    permissions: [],
    devOnly: "false",
    run: ({client, message, args}) => {

        let responses = ["https://media.discordapp.net/attachments/938426992427147274/939033388122271754/borgar_1.gif",
          "https://cdn.discordapp.com/attachments/938426992427147274/939033388352946277/borgar_2.gif",
          "https://cdn.discordapp.com/attachments/938426992427147274/939033388596219934/borgar_3.gif",
          "https://cdn.discordapp.com/attachments/938426992427147274/939033389103714334/borgar_5.gif",
          "https://cdn.discordapp.com/attachments/938426992427147274/939033388835282964/borgar_4.gif",
          "https://cdn.discordapp.com/attachments/938426992427147274/939033389393133598/borgar_6.gif"];
        
        let randomArray = responses[~~(Math.random() * responses.length)];

        const target = message.mentions.users.first();
        if (!target) return message.channel.send(`Mention the user you want to give cookie to`);
        const memberTarget = message.guild.members.cache.get(target.id);

        const embed = new MessageEmbed();
            embed.setTitle("BORGARRR")
            embed.setDescription(` ${message.author.tag} gave ${target} a borgar!`);
            embed.setImage(url=`${randomArray}`); 

            embed.setTimestamp();
            message.channel.send({ embeds: [embed] });
    },
};