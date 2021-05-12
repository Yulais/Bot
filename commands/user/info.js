const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `ip`,
        aliases: [`ip`, `ip`]
    },
    run: async (bot, message, args) => {
        message.delete()
        let info1 = `dreamspvp.net`
        let info2 = `k5z, _Yulais_, xC90x, $ nAch`
        let info3 = `_Yulais_`
        let info4 = `Dreams Administracion`

        let embed = new MessageEmbed()
            .setTitle(`Bot Information`)
            .setColor(`DARK_RED`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(message.guild.name)
            .setTimestamp()
            .addField(`ip`, info1, true)
            .addField(`Owners:`, info2, true)
            .addField(`Developers:`, info3, true)
            .setDescription(`Bot Developed by: ${info4}`)
        message.channel.send(embed).then(m => (m.delete({timeout: 1000000})));
    }
}
