// messageCreate
/* Emitted whenever a message is created.
PARAMETER   TYPE      DESCRIPTION
message     Message   The created message */

const utils = require('../utils');

module.exports = async (message) => {
  message.content = message.content.toLowerCase();

  if (message.content.includes("was verified by Double Counter and channels were automatically unlocked for them.")){
    console.log(message.content.replace(" was verified by Double Counter and channels were automatically unlocked for them.", ""));
  }else if (message.content.includes("Alt-account intrusion attempt blocked")){
    console.log(message.content);
  }

  if(message.author.bot) return;

  if(message.content == "createwhatsapppannel"){
    
    message.channel.send({
      content: 'Hey',
      components:[
        {
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "label": "Carrega para gerar um código!",
                    "style": 1,
                    "custom_id": "whatsapp"
                }
            ]

        }
    ],
      ephemeral: true
    })

  }else if(message.content == "createemailpannel"){
    
    message.channel.send({
      content: 'Hey',
      components:[
        {
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "label": "Carrega para gerar um código!",
                    "style": 1,
                    "custom_id": "email"
                }
            ]

        }
    ],
      ephemeral: true
    })

  }else if(message.content == "createsitepannel"){
    
    message.channel.send({
      content: 'Hey',
      components:[
        {
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "label": "Carrega para gerar um link!",
                    "style": 1,
                    "custom_id": "site"
                }
            ]

        }
    ],
      ephemeral: true
    })

  }else if(message.content == "createtwitchpannel"){
    await message.channel.send({
      content: `Olá!
      Aqui podes sincronizar a tua conta com a twitch dando mais credibilidade á tua conta, para isso basta carregares no botão a baixo para gerar um código que depois terás de enviar no chat do canal do nosso querido bot :grin:  [linke](https://www.twitch.tv/the_alone_bot)`,
      components:[
        {
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "label": "Gerar",
                    "style": 1,
                    "custom_id": "twitch"
                }
            ]

        }
    ],
      ephemeral: true
    })
    message.delete();
  }else if(message.content.startsWith("teste")){
    utils.client.users.fetch(message.content.replace("teste ", "")).then(async (result) => {
        await message.channel.send(`Esse id pertence a : ${result.username}#${result.discriminator}`)
        message.delete()
      });

  }

}


