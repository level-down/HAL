exports.run = (client, message, args) => {
    message.reply("Just a moment!").then((msg) => {
    	msg.edit("Pong! " + (msg.createdTimestamp - message.createdTimestamp) + " ms");
    }).catch(console.error);
}