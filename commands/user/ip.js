const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `ip`,
        aliases: [`ip`, `ip`]
    },
    run: async (bot, message, args) => {
        message.delete()
        let info1 = `dreamspvp.net`
        
        let embed = new MessageEmbed()
            .setTitle(`✸ | Dreams Network`)
            .setColor(`DARK_RED`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(message.guild.name)
            .setTimestamp()
            .addField(`  IP`, info1, true)
        message.channel.send(embed).then(m => (m.delete({timeout: 1000000})));
    }
}
