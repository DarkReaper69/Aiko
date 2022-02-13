module.exports = {
    name: "clear",
    category: "moderation",
    permissions: ["MANAGE_MEMBERS"],
    devOnly: false,
    run: async ({ client, message, args }) => {

        let count = parseFloat(message.args[0]) + 1;
            count = count > 100 ? 100 : count;

            if (isNaN(count)) return 
                message.channel.send("when the number");

        message.channel.bulkDelete(count).then(() => {
            message.channel.send(`Successfully deleted ${count} messages.`).then(msg => msg.delete({timeout: 5000}));
        });
    },
};
 