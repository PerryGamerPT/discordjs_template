// interactionCreate
/* Emitted when an interaction is created.
PARAMETER     TYPE          DESCRIPTION
interaction   Interaction   The interaction which was created  */

const utils = require('../utils');
const fs = require('fs');

const events = fs.readdirSync(`${__dirname}/../interactions/`).filter(file => file.endsWith(".js"));
let inters = {};
for (const file of events) {
  const eventName = file.split(".")[0];
  const event = require(`${__dirname}/../interactions/${file}`);
  inters[file.replace(".js", "")] = event;
  utils.client.on(eventName, event);
  //console.log("evento ->"+eventName);
}

module.exports = async (interaction) => {
  try {
    console.log("Alguém tentou interagiu: ",{customId: interaction.customId , commandName: interaction.commandName})
    if(interaction.customId!= undefined){
      inters[interaction.customId](interaction);
    }else{
      inters[interaction.commandName.trim()](interaction);
    }
  } catch (error) {
    console.log("Alguém tentou interagir com o bot usando algo desconhecido: ",{customId: interaction.customId , commandName: interaction.commandName})
    await interaction.reply("Algo de errado não está certo :face_with_monocle: Se estás a ver esta mensagem é porque algo está muito errado mas já foi enviado um alerta á equipa de ornitorrincos para colocarem tudo a funcionar de novo :grin:");
    interaction.deleteReply();
  }
  
}


