module.exports = {
    name: "unban",
    category: "moderation",
    permissions: ["BAN_MEMBERS"],
    devOnly: false,
    run: async ({client, message, args}) => {
        const userId = args[0]
        message.guild.members.unban(userId).then((user) => {
            message.channel.send({ content: `${user.tag} was unbanned.`})
        }).catch(() => {
            message.channel.send({ content: `Specify a valid banned member's id.`})
        })
    }
}