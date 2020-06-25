exports.run = (client, message, args) => {

    let returnMessage = ''
    let opponent = message.mentions.users.first(1)

    if(message.mentions.users.array().length>1){
        returnMessage = "Only one opponent at a time!!"
    }
    else if (opponent === message.author){
        returnMessage = "Don't RPS yourself : /"
    } 
    else if (opponent.length === 0){
        returnMessage = "It takes 2 to tango...please @ an opponent when RPSing"
    } 
    else{
        let throw1 = rando()
        let throw2 = rando()
        while(throw1 === throw2){
            throw2 = rando()
        }
        returnMessage = `RESULTS: \n ${message.author}: ${throw1} \n ${opponent}: ${throw2}`
    }

    message.reply("Deciding...").then((msg) => {
    	msg.edit(returnMessage);
    }).catch(console.error);
    
}

function rando(){
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)]
}