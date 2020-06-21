const denyListViolation = (client, message) => {
  client.channels.cache.get(client.config.archiveChannel).send(`${message.author.username} sent "${message.content}" to ${message.channel.name}`)
  message.delete()
  message.channel.send({
      embed:{
          description: `🚨 ALERT: A message has been flagged by ${client.config.prefix} as containing words in the denylist and has been redirected to the archive channel`,
          color: 13385801
      }
  })
};

module.exports = denyListViolation