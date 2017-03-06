exports.run = (client, message, args) => {
   	if (message.author.id != client.config.root) {
        return message.reply("You do not have the permission to use this command.").catch(console.error);
    }

   	client.commands.push(args[0]);

    message.reply(`The command ${args[0]} has been added.`).catch(console.error);
};