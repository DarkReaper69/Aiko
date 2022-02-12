module.exports = {
    name: "clear",
    category: "moderation",
    permissions: ["MANAGE_MEMBERS"],
    devOnly: false,
    run: async ({ client, message, args }) => {
        if(!args[0]) return 
            message.channel.send('Please specify the number of messages to delete.');

        if(isNaN(args[0])) return 
            message.channel.send('Please specify a valid number.');

        if(args[0] > 100) return 
            message.channel.send('Please specify a number less than 100.');

        if(args[0] < 1) return 
            message.channel.send('Please specify a number greater than 1.');

        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`Successfully deleted ${args[0]} messages.`).then(msg => msg.delete({timeout: 5000}));
        });
    },
};
 