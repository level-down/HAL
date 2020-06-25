# HAL

HAL is our organization's discord bot! 

Initial functionality roadmap
- detection and flagging of deprecated language in public channels
- notify the chat on new issues/PRs
- anonymous reporting of CoC violations
- allowing users to rock-paper-scissors their fellow discorders

### Development

Create a file called `config.json` in the `config` directory with the following structure:

```
{
	"token": "<from bot tab of discord application>",
	"prefix": "<name of bot for command invocation>"
  "archiveChannel" "<id of channel where you want to archive denyList messages>"
}
```

Create a file called `denylist.json` in the `config` directory with the following structure:

```
[
  "badword",
  "anotherbadword"
]
```

Populate it with any words you don't want allowed in chat. 

run `npm install` and `node app.js` to start the bot.
