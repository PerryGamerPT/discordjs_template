const utils = require('../utils');

module.exports = async (interaction) => {
  interaction.reply({ content: 'Para finalizar a validação envia uma mensagem via whatsapp para o numero +351999999999 contendo o seguinte código: '+(utils.randomString(7)), ephemeral: true });
}