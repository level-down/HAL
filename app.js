const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
client.config = require("./config/config.json");
const containsDenyListWord = require("./tools/containsdenylistword.js")
const denyListViolation = require("./handlers/denylistviolation.js")
let commands = []

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const commandName = file.split(".")[0];
        commands.push(commandName)
    });
});

client.commands = commands

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

client.on("message", message => {
    if (message.author.bot) return;

    if (!message.content.startsWith(`${client.config.prefix} `)) {
        if (containsDenyListWord(message)) denyListViolation(client, message);
        return
    };

    const userInput = message.content.slice(client.config.prefix.length + 1).split(" ");

    const command = userInput[0]
    const args = userInput.slice(1)

    if (client.commands.indexOf(command) == -1) {
        return;
    }
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.on("messageUpdate", function(oldMessage, newMessage){
    if (containsDenyListWord(newMessage)) denyListViolation(client, newMessage);
});

client.login(client.config.token);


function cl(arg){
    console.log(arg)
}

let rps = require(`./commands/rps.js`)
// rps.run("client", "@someone", "args")