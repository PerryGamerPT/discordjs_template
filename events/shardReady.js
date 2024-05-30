// shardReady
/* Emitted when a shard turns ready.
PARAMETER            TYPE               DESCRIPTION
id                   number             The shard id that turned ready
unavailableGuilds    ?Set <Snowflake>   Set of unavailable guild ids, if any  */

module.exports = (id, unavailableGuilds) => {
  //console.log(`a shard turned ready`);
  //console.log({id, unavailableGuilds});
}


