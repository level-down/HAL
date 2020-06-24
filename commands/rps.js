exports.run = (client, message, args) => {
    console.log(client, message, args)
    // message is a thing from discord.js, presumably `.reply` returns a promise, which has....something in it? looks like the message that you send in the reply, i suppose using this format allows you to catch connectivity errors
    // args, by the time it gets here, is just the literal user input. so we should be able to split it by the @ symbol to find out which user the author is trying to rock paper scissors with
    let opponent = args.split('@')[1]
    let throw1 = rando()
    let throw2 = rando()
    while(throw1 === throw2){
        throw2 = rando()
    }
    message.reply("Deciding...").then((msg) => {
    	msg.edit(`RESULTS: \n ${message.author}: ${throw1} \n ${opponent}: ${throw2}`);
    }).catch(console.error);
    
}

function rando(){
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)]
}