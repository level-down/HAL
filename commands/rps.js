exports.run = (client, message, args) => {
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