module.exports = {
  name: "clear",
  category: "moderation",
  permissions: ["MANAGE_MEMBERS"],
  devOnly: false,
  run: async ({ client, message, args }) => {
    let [purgeAmount] = args;
    if (isNaN(parseInt(purgeAmount))) {
      return message.channel.send({ content: "Specify a valid number dummy" });
    }

    if (purgeAmount < 1 || purgeAmount > 100) {
      return message.channel.send({ content: "Not a valid amount" });
    }

    purgeAmount = parseInt(purgeAmount);

    try {
      await message.channel.bulkDelete(purgeAmount);
      message.channel.send(`Successfully deleted ${purgeAmount} messages.`);
    } catch (error) {
      console.log(error);
    }
  },
};
