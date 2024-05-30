// guildMemberAdd
/* Emitted whenever a user joins a guild.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that has joined a guild    */

module.exports = (member) => {  
  //console.log(`a user joins a guild: ${member.tag}`);
  console.log(`a user joins a guild: ${member.tag} ${member.user.username}`);
  var role = member.guild.roles.cache.find(role => role.name === "Unverified");
  member.roles.add(role);
}


