// threadMembersUpdate
/* Emitted whenever members are added or removed from a thread. 
Permissions Required: GUILD_MEMBERS privileged intent
PARAMETER    TYPE                                   DESCRIPTION
oldMembers   Collection <Snowflake, ThreadMember>   The members before the update
newMembers   Collection <Snowflake, ThreadMember>   The members after the update    */

module.exports = (oldMembers, newMembers) => {
  //console.log(`members are added or removed from a thread`);
  //console.log({oldMembers, newMembers});
}


