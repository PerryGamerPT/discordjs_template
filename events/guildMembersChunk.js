
// guildMembersChunk
/* Emitted whenever a chunk of guild members is received (all members come from the same guild).
PARAMETER      TYPE                      DESCRIPTION
members        Array<GuildMember>        The members in the chunk
guild          Guild                     The guild related to the member chunk    */

module.exports = (members, guild, chunk) => {
  //console.log(`a chunk of guild members is received`);
  //console.log({members, guild, chunk});
}


