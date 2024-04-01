const utils = require('../utils');

module.exports = async (interaction) => {
  await interaction.reply({ content: 'deve ter funcionado', ephemeral: true });
  await utils.restart(interaction.client, interaction.guildId);
}