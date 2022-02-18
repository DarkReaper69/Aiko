const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "pat",
    category: "fun",
    permissions: [],
    run: ({client, message, args}) => {

        let responses =  ['https://cdn.discordapp.com/attachments/840820983308484628/849859564815777792/pat_1.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849859570943524894/pat_4.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849859572414939177/pat_5.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849859618716516393/pat_6.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849859625209036830/pat_2.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849859637116534784/pat_3.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849859655957086208/pat_7.gif'];

        let randomArray = responses[~~(Math.random() * responses.length)];

        const target = message.mentions.users.first();
        if (!target) return message.channel.send(`I couldn't find ${target}`);
        const memberTarget = message.guild.members.cache.get(target.id);

        const embed = new MessageEmbed()
            .setTitle("CUTEEEE")
            .setDescription(`${target} has been patted by ${message.author.tag}`)
            .setImage(url=`${randomArray}`)
            .setColor("LUMINOUS_VIVID_PINK")

            .setTimestamp();
            message.channel.send({ embeds: [embed] });
  },
};