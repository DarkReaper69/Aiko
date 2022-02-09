const { getFiles } = require("../util/functions");

module.exports = (bot, reload) => {
  const { client } = bot;

  let events = getFiles("./events/", ".js");

  if (events.length === 0) throw new Error("Events collection is empty.");

  events.forEach((f, i) => {
    if (reload) delete require.cache[require.resolve(`../events/${f}`)];
    const event = require(`../events/${f}`);
    client.events.set(event.name, event);

    if (!reload) console.log(`${i + 1}. ${f} loaded`);
  });

  if (!reload) initEvents(bot);
};

function triggerEventHandler(bot, event, ...args) {
  const { client } = bot;

  if (typeof event !== "string" && !client.events.has(event)) {
    const message = [
      "The event you tried to trigger is either",
      "not a string or isn't available in your collection of events",
    ];
    throw new Error(message.join(" "));
  }

  try {
    const event = client.events.get(event);
    event.run(bot, ...args);
  } catch (err) {
    throw new Error(`The event "${event}" have failed to be triggered`);
  }
}

function initEvents(bot) {
  const { client } = bot;

  client.on("ready", () => {
    triggerEventHandler(bot, "ready");
  });

  client.on("messageCreate", (message) => {
    triggerEventHandler(bot, "messageCreate", message);
  });

  client.on("status", () => {
    triggerEventHandler(bot, "status");
  });
}
