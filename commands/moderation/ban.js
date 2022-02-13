const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    devOnly: false,
    run: async ({ client, message, args }) => {
        /**
         * Make sure to make the difference between
         * user and member since the user may or may not
         * be a member of the guild (server) and a member
         * is attached to the GuildMember class which
         * the ban method is available only here
         */
        const user = message.mentions.users.first();
        if (!user) return message.channel.send(`The user does not exists`);

        const member = message.guild.members.cache.get(user.id);
        const { username, discriminator } = member.user;

        const { tag } = message.author;

        const embed = new MessageEmbed()
            .setTitle("WOH! when the ban")
            .setDescription(
                [
                    `${username}#${discriminator}`,
                    `has been banned by ${tag}`,
                ].join(" ")
            ) // Avoiding making the string so long
            .setTimestamp()
            .setColor("RED");

        try {
            /**
             * The ban method retuns a promise
             * So we must use `await` to make it
             * run properly and asynchronously
             */
            await member.ban();
            message.channel.send({ embeds: [embed] });
        } catch (error) {
            /**
             * If we can't ban the member.
             * Send the error message in discord
             * and the console.
             */
            message.reply({ content: `Cannot ban ${username}` });
            console.error(
                [
                    `Coudln't be able to ban ${username}`,
                    `Availablity: ${member.bannable}`,
                ].join("\n")
            );
        }
    },
};
