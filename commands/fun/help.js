const { MessageEmbed } = require("discord.js");

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

    const embed = new MessageEmbed();
            embed.setTitle("HELP IS HEREEE\nAvailable commands:")
            embed.setDescription(`Fun: ${flt(commands,"fun")}\nModeration :${flt(commands,"moderation")}`);
            embed.setColor("AQUA");

            embed.setTimestamp();
            message.channel.send({ embeds: [embed] })
  },
};
