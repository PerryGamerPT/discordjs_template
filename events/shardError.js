// shardError
/* Emitted whenever a shard's WebSocket encounters a connection error.
PARAMETER   TYPE    DESCRIPTION
error       Error   The encountered error
shardId     number  The shard that encountered this error   */

module.exports = (error, shardId) => {
  //console.error(`a shard encountered a connection error`);
  //console.error({error, shardId});
}


