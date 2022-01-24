const { getFiles } = require("../util/fundtions")
const fs = require("fs")
const { client } = require("..")

module.exports = (bot, reload) => {

    fs.readdirSync("./commands/").forEach((category) => {
        let files = getFiles(`./commands/${category}`, ".js")

        commands.forEach((f) => {
            if (reload)
                delete require.cache[require.resolve(`..commands/${category}/${f}`)]
            const command = require(`../commands/${category}/${f}`)
            client.commands.set(command.name, command)
        })  
    })
    console.log(`Loaded ${client.commands.size} commands`)
}