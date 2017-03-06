exports.run = (client, message, args) => {
    if (!args || args.size < 1) return message.channel.reply(`Correct Usage: reload [command name]`);

    if (message.author.id != client.config.root) {
        return message.reply("You do not have the permission to use this command.").catch(console.error);
    }

    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`).catch(console.error);
};