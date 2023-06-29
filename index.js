const { LoadCommands, AoiClient} = require("aoi.js");
/*  Enable This If You Use Replit!
const {KeepAlive} = require(`./server`);
*/
const { Util} = require(`aoi.js`);
const { parse, createAst } = require('@akarui/aoi.parser');
const {
  parseExtraOptions
} = require('@akarui/aoi.parser/components');

Util.parsers.ErrorHandler = parse;

Util.parsers.OptionsParser = (data) => {
  return createAst(data).children.map(parseExtraOptions);
}

const bot = new AoiClient({
  token: "bot token here", // if you use replit and you want use secrets write this here: token: proces.env.token,
  prefix: "t!",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildBans", "GuildVoiceStates", "GuildMessageTyping", "GuildMembers", "GuildInvites", "GuildMessageReactions", "GuildPresences"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tabels: ["main"],
    path: "./database/",
    extraOption: {
      dbType: "keyValue"
    },
  },
  responseOndit: {
      commands: true
  },


})

require('./variables/variables.js')(bot);
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")


bot.readyCommand({
  code: `
  $log[I'm Ready On $userTag[$clientId]]
  `,
  channel: ""
})

bot.status({
  status: "idle",
  text: "Made With ❤️&☕",
  type: "WATCHING",
  time: 12
})
bot.status({
  status: "idle",
  text: "Server Tickets",
  type: "WATCHING",
  time: 12
  
})