const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    devOnly: false,
    run: async ({ client, message, args }) => {
        const target = message.mentions.users.first();
        const memberTarget = message.guild.members.cache.get(target.id);
        if (!target) return message.channel.send(`I couldn't ban ${target}`);
        if (target && target.bannable) {
            memberTarget.ban();
            const embed = new MessageEmbed();
            embed.setTitle("WOH! when the ban");
            embed.setDescription(
                `${target} has been banned by ${message.author.tag}`
            );

            embed.setTimestamp();
            message.channel.send({ embeds: [embed] });
        } else {
            message.channel.send(`I couldn't ban ${target} huh...`);
        }
    },
};
