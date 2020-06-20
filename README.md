# HAL

HAL is our organization's discord bot! 

Initial functionality roadmap
- detection and flagging of deprecated language in public channels
- notify the chat on new issues/PRs
- anonymous reporting of CoC violations

### Development

Create a file called `config.json` in the `config` directory with the following structure:

```
{
	"token": "<from bot tab of discord application>",
	"prefix": "<name of bot for command invocation>"
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