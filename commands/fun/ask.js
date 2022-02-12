module.exports = {
    name: "ask",
    category: "fun",
    permisssions: [],
    devOnly: false,
    run: ({ client, message, args }) => {
      let responses = [
        "what",
        "oh",
        "i don't know but you're cute",
        "yesss",
        "nooo",
        "haha what",
        "uhhhhh",
        "*pisses uncontrollably*",
        "uh- uhm- i- uh- yes...",
        "woaahhhh :00000",
        "real",
        "you have skill issue",
        "gimme a break man",
        "yes please",
        "yeah no, sorry",
        "what do you mean?",
        "you're*",
        "hiiiiiiiiiiii",
        "im sorry what",
        "ok and?",
        "uhhhhhhhh",
        "cool",
        "mhm mhm",
        "wow so cool :000",
        "yeshhhh",
        "ywusss",
        "nuuuuuu",
        "nooooo :(("
      ];
  
      let randomArray = responses[~~(Math.random() * responses.length)];
  
      message.reply(randomArray);
    },
  };
  