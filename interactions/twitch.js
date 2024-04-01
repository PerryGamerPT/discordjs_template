const utils = require('../utils');

module.exports = async (interaction) => {
  interaction.reply({ content: 'Para finalizar a envia uma mensagem no chat da twitch do nosso querido bot "the_alone_bot" contendo o seguinte código: '+(utils.randomString(7)), ephemeral: true });
}