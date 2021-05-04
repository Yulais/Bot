const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `ts`,
        aliases: [`ts`, `ts`]
    },
    run: async (bot, message, args) => {
        message.delete()
        let info1 = `Ts.astropvp.club`
        let info2 = `_Yulais_#0009, 15wv#7773, 73#1543`
        let info3 = `Dxpends#6096,Sherik#7117`
        let info4 = `Sherik#7117`

        let embed = new MessageEmbed()
            .setTitle(`Bot Information`)
            .setColor(`DARK_RED`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(message.guild.name)
            .setTimestamp()
            .addField(`ts`, info1, true)
            .addField(`Owners:`, info2, true)
            .addField(`Developers:`, info3, true)
            .setDescription(`Bot Developed by: ${info4}`)
        message.channel.send(embed).then(m => (m.delete({timeout: 1000000})));
    }
}