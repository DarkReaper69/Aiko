module.exports = {
  name: "clear",
  category: "moderation",
  permissions: ["MANAGE_MEMBERS"],
  devOnly: false,
  run: async ({ client, message, args: [purgeAmount] }) => {
    if (isNaN(parseInt(purgeAmount))) {
      return message.channel.send({ content: "not a number" });
    }

    let newPurgeAmount = 0;
    typeof purgeAmount === "number" && purgeAmount < 5
      ? (newPurgeAmount = 5)
      : purgeAmount;

    const count = parseInt(purgeAmount) + 1;

    if (count < 0 || count > 100) {
      return message.channel.send({ content: "Not a valid amount" });
    }

    try {
      await message.channel.bulkDelete(count);
      message.channel
        .send(`Successfully deleted ${count} messages.`)
        .then((msg) => {
          msg.delete({ timeout: 5000 });
        });
    } catch (error) {
      console.log(error);
    }
  },
};
