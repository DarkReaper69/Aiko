module.exports = {
  name: "help",
  category: "info",
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
        `info: ${flt(commands, "info")}`,
        `moderation: ${flt(commands, "moderation")}`,
        `reponse: ${flt(commands, "response")}`,
      ].join("\n"),
    });
  },
};
