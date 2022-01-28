module.exports = {
  name: "status",
  run: async (bot) => {
    const { client } = bot;

    client.bot.setPresence({
      status: "online",
      activity: {
        name: "p!help",
        type: "LISTENING",
      },
    });
  },
};
