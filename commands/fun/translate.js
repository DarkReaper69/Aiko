const discord = require('discord.js')
const translate = require('@iamtraction/google-translate')

module.exports = {
    name: "translate",
    category: "ifun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        const txt = args.join(" ")
        if(!txt) return message.channel.send("Invalid,please try again")
        translate(txt, { to: 'en' }).then(res => {
            message.channel.send(res.text)
        }).catch(err => {
            message.channel.send("Error occurred,try again")
        });
        
    },
};