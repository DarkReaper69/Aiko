module.exports = {
  name: "help",
  category: "fun",
  permissions: [],
  devOnly: false,
  run: ({ client, message, args }) => {
    const { commands } = client;
    const flt = (commands, category) => {
      return commands
        .filter((command) => command.category === category)
        .map((command) => `\`${command.name}\``)
        .join(" ");
    };

    message.reply({
      content: [
        "Available commands",
        `fun: ${flt(commands, "fun")}`,
        `moderation: ${flt(commands, "moderation")}`,
      ].join("\n"),
    });
  },
};
