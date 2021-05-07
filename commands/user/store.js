const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `store`,
        aliases: [`rangos`, `tienda`]
    },
    run: async (bot, message, args) => {
        message.delete()
        let info1 = `store.astropvp.club`

        let embed = new MessageEmbed()
            .setTitle(`Tienda`)
            .setColor(`DARK_RED`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(message.guild.name)
            .setTimestamp()
            .addField(`puedes encontrar rangos en`, info1, true)
        message.channel.send(embed).then(m => (m.delete({timeout: 1000000})));
    }
}