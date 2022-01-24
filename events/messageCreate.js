const Discord = require("discord.js")
const { owners } = require("..")

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot, message) {
        const {client, prefix, owners} = bot

        if (!message.guild) return
        if (message.author.bot) return
        if (!message.content.startsWith(prefix)) return

        const args =  message.content.slice(prefix.length).trim().split(/ +/g)
        const cmdstr = args.shift().toLowerCase()

        let command = client.commands.get(cmdstr)
        if (!command) () =>  {
            return message.reply("This doesn't exist baka")
        }

        let member = message.member

        if (command.devOnly && !owners.includes(member.id)){
            return message.reply("That command is not for you sussy baka")
        }

        if (command.permssions && member.permssions.missing(command.permssions).length !== 0){
            return message.reply("You lack skill issue to use this command")
        }

        try {
            await command.run({...bot, message, args})
        }
        catch (err) {
            let errMsg = err.toString()

            if (errMsg.startsWith("?")) {
                errMsg = errMsg.slice(1)
                await message.reply(errMsg)
            }
            else 
                console.error(err)
        }

     }
}