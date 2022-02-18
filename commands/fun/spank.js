const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "spank",
    category: "fun",
    permissions: [],
    run: ({client, message, args}) => {

        let responses = ['https://cdn.discordapp.com/attachments/840820983308484628/848155898877968474/spanked.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849859374637645834/spank_2.gif',
        'https://cdn.discordapp.com/attachments/840820983308484628/849859391490621470/spank_1.gif'];

        let randomArray = responses[~~(Math.random() * responses.length)];

        const target = message.mentions.users.first();
        if (!target) return message.channel.send(`I couldn't find ${target}`);
        const memberTarget = message.guild.members.cache.get(target.id);

        const embed = new MessageEmbed()
            .setTitle("SPANKED")
            .setDescription(`${target} has been spanked by ${message.author.tag}`)
            .setDescription(`${target} has been spanked by ${message.author.tag}`)
            .setImage(url=`${randomArray}`) 

            .setTimestamp();
            message.channel.send({ embeds: [embed] });
  },
};