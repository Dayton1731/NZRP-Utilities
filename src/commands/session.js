const {
  SlashCommandBuilder,
  EmbedBuilder
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('session')
    .setDescription('Start a NZRP session'),

  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setTitle('🚨 NZRP SESSION STARTED')
      .setDescription('A new roleplay session is now active!')
      .addFields(
        { name: 'Host', value: interaction.user.username },
        { name: 'Server', value: 'NZRP Public' },
        { name: 'Status', value: '🟢 Active' }
      )
      .setColor('#0055ff')
      .setTimestamp();

    await interaction.reply({
      content: '<@&1497383870495064146>',
      embeds: [embed]
    });

  }
};
Added session command
