module.exports = {
  name: "invite",
  category: "fun",
  permissions: [],
  run: ({client, message, args}) => {
      message.reply("https://discord.com/api/oauth2/authorize?client_id=840815160498061332&permissions=8&scope=bot")
  },
};