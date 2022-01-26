const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();

            if(!target) return message.channel.send(`I couldn't ban ${target}`)

            const Embed = new MessageEmbed().setTitle("WOH! when the ban").setDescription(`${target} has been banned by ${message.author.tag}`).setTimestamp()
            message.channel.send({ embeds: [Embed] })
        }else{
            message.channel.send(`I couldn't ban ${target} huh...`);
        }
    }
}