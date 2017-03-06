const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

// Let's extend the client object with these.
client.config = require("./config/config.json");
client.commands = JSON.parse(fs.readFileSync("./config/commands.json", 'utf8'));

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
    if (!message.content.startsWith(client.config.prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(client.config.prefix.length);
    let args = message.content.split(" ").slice(1);

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