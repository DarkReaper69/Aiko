const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kiss",
    category: "fun",
    permissions: [],
    run: ({client, message, args}) => {

        let responses = ['https://cdn.discordapp.com/attachments/840820983308484628/849574856970469386/kiss_3.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849574879446827008/kiss_5.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849574885150818314/kiss_2.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849575000477794324/kiss_4.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849575028667842640/kiss_1.gif'];

        let randomArray = responses[~~(Math.random() * responses.length)];

        const target = message.mentions.users.first();
        if (!target) return message.channel.send(`I couldn't find ${target}`);
        const memberTarget = message.guild.members.cache.get(target.id);

        const embed = new MessageEmbed()
            .setTitle("FLOOSHED")
            .setDescription(`${target} has been kissed by ${message.author.tag}`)
            .setImage(url=`${randomArray}`)
            .setColor("AQUA") 

            .setTimestamp();
            message.channel.send({ embeds: [embed] });
  },
};