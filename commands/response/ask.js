module.exports = {
    name: "ask",
    category: "response",
    permisssions: [],
    devOnly: false,
    run: ({client, message, args})  =>  {
        let responses = ["what" ,
                        "oh" ,
                        "i don't know but you're cute" ,
                        "yesss" ,
                        "nooo" ,
                        "haha what",
                        "uhhhhh",
                        "*pisses uncontrollably*"]

       let randomArray = responses[Math.floor(Math.random() * responses.length)]

       message.reply(randomArray)

        
    }
}