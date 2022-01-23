const Discord = require("discord.js")

require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content === "hi"){
        message.reply("hello cutie")
    }
})

const WelcomeChannelId = "840820983308484628"
client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(WelcomeChannelId).send(`<@${member.id}> Welcome to the server! Have a cookie`)
})

client.login(process.env.TOKEN)
