module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    run: ({client, message, args}) => {
        message.reply("pong")
    }
}