const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "hug",
    category: "fun",
    permissions: [],
    run: ({client, message, args}) => {

        let responses = ['https://cdn.discordapp.com/attachments/840820983308484628/849858740341571624/hug_7.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849858765696139284/hug_4.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849858784121061386/hug_3.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849858793273294918/hug_2.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849858794602758164/hug_1.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849858795865112596/hug_6.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849858864353509426/hug_5.gif'];

        let randomArray = responses[~~(Math.random() * responses.length)];

        const target = message.mentions.users.first();
        if (!target) return message.channel.send(`I couldn't find ${target}`);
        const memberTarget = message.guild.members.cache.get(target.id);

        const embed = new MessageEmbed();
            embed.setTitle("Woh! Huggies")
            embed.setDescription(`${target} has been hugged by ${message.author.tag}`);
            embed.setImage(url=`${randomArray}`);
            embed.setColor("DARK_AQUA"); 

            embed.setTimestamp();
            message.channel.send({ embeds: [embed] });
  },
};