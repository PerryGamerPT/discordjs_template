// guildUnavailable
/* Emitted whenever a guild becomes unavailable, likely due to a server outage.
PARAMETER    TYPE          DESCRIPTION
guild        Guild         The guild that has become unavailable    */

module.exports = (guild) => {
  console.error(`a guild becomes unavailable, likely due to a server outage: ${guild}`);
}


