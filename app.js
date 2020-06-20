const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const containsDenyListWord = require("./tools/containsDenyListWord.js")
let commands = []
client.config = require("./config/config.json");

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
        if (containsDenyListWord(message)){
            client.channels.cache.get('724022625386496031').send(`${message.author.username} sent "${message.content}" to ${message.channel.name}`)
            message.delete()
            message.channel.send({
                embed:{
                    description: "🚨 ALERT: A message has been flagged by HAL as containing words in the denylist and has been redirected to #denylist-infractions",
                    color: 13385801
                }
            })
        } 
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

client.login(client.config.token);
