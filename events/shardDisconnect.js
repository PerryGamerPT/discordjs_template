// shardDisconnect
/* Emitted when a shard's WebSocket disconnects and will no longer reconnect.
PARAMETER   TYPE         DESCRIPTION
event       CloseEvent   The WebSocket close event
id          number       The shard id that disconnected */

module.exports = (event, id) => {
  //console.log(`shard with id ${id} has disconnected`);
  //console.log({event, id});
}


