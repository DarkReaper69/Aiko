const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kick",
    category: "moderation",
    permissions: ["KICK_MEMBERS"],
    devOnly: false,
    run: async ({ client, message, args }) => {
        const target = message.mentions.users.first();
        if (!target) return message.channel.send(`I couldn't kick ${target}`);
        const memberTarget = message.guild.members.cache.get(target.id);
        if (target.kickable) {
            memberTarget.kick();
            const Embed = new MessageEmbed()
                .setTitle("BEWM!>< get outta here haha")
                .setDescription(
                    `${target} has been kicked by ${message.author.tag}`
                )
                .setTimestamp();
            message.channel.send({ embeds: [Embed] });
        } else {
            message.channel.send(
                `I couldn't kick ${target}, maybe you have skill issue :(( try again i guess`
            );
        }
    },
};
