const ms = require("ms");

module.exports = {
  name: "timeout",
  category: "moderation",
  permissions: ["MANAGE_MESSAGES"],
  devOnly: false,
  run: async ({ client, message, args }) => {
    const target = message.mentions.users.first();

    if (!target) return message.channel.send(`I couldn't timeout ${target}`);

    if (!args[1])
      return message.channel.send("No time limit defined, try again.");

    const memberTarget = message.guild.members.cache.get(target.id);

    const time = ms(args[1]);
    const reason = args[2] || null;
    memberTarget.timeout(time, reason);
    message.channel.send(
      `${target} has been timed out for ${ms(time, { long: true })}`
    );
  },
};
