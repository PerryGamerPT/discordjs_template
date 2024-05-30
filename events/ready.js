
const utils = require('../utils');
const {ActivityType } = require('discord.js');
// ready
/* Emitted when the client becomes ready to start working.    */

module.exports = async (readyClient) => {
  utils.setPresence(readyClient, "o mundo acabar", "online", ActivityType.Watching);

  readyClient.guilds.cache.map(async (guild) => {
    guild = utils.normalizeJson(guild);
    await utils.restart(readyClient, guild.id);
    
  })
  console.log(` ${readyClient.user.tag} -> Olha eu aqui!! ${utils.normalizeJson(readyClient.guilds.cache).length} servidores`);
}

