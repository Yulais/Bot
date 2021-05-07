const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `media`,
        aliases: [`yt`, `media`]
    },
    run: async (bot, message, args) => {
        message.delete()
        let info1 = `75 seguidores y 30 Visitas`
        let info2 = `250 seguidores y 50 Visitas`
        let info3 = `400 seguidores y 100 Visitas`
        let info4 = `150 Seguidores y media de 10 personas por directo`
        let info5 = `1000 seguidores y 300 Visitas`

        let embed = new MessageEmbed()
            .setTitle(`RANK MEDIA`)
            .setColor(`DARK_RED`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(message.guild.name)
            .setTimestamp()
            .addField(`MiniYT:`, info1, true)
            .addField(`Youtuber:`, info2, true)
            .addField(`Famous:`, info3, true)
            .addField(`Partner:`,info5,true)
            .addField(`Streamer:`, info4, true)
        message.channel.send(embed).then(m => (m.delete({timeout: 1000000})));
    }
}