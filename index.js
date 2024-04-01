const { Client , Events , GatewayIntentBits , Partials , ActivityType , REST , Routes} = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();


const client = (new Client({ intents: Object.keys(GatewayIntentBits).map((a)=>{ return GatewayIntentBits[a] }), partials: Object.keys(Partials).map((a)=>{ return Partials[a] }) }));
client.login(process.env.BOT_TOKEN).catch((err) => { console.log(`Error logging in: ${err}`); });

const events = fs.readdirSync(`${__dirname}/events/`).filter(file => file.endsWith(".js"));
for (const file of events) {
  const eventName = file.split(".")[0];
  const event = require(`${__dirname}/events/${file}`);
  utils.client.on(eventName, event);
  //console.log("evento ->"+eventName);
}