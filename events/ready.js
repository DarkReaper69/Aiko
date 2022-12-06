module.exports = {
  name: "ready",
  run: async (bot) => {
    const { client } = bot;

    console.log("Logged in as " + bot.client.user.tag);

    client.user.setPresence({
      activities: [{ name: `to %help`, type: `LISTENING` }],
      status: `online`,
    });
  },
};
