module.exports = {
  name: "help",
  category: "info",
  permissions: [],
  devOnly: false,
  run: ({ client, message, args }) => {
    message.reply(
      "**The following commands exists for now:**\n**Moderation Commands:**\n `ban`\n `kick` \n `timeout`\n**Normal Commands:**\n`ask`\n`ping`\n\nMore coming soon hopefully,tell dev not to be lazy"
    );
  },
};
