const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `unban`,
        aliases: [`unban`],
    },
    run: async (bot, message, args) => {
        // Deleting the command message
        message.delete()
        // Checking if they are staff
        if(!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply(`no tienes permisos`)
        let serverm = message.guild.members;
        // Finding the ID mentioned in the arugument
        if(isNaN(args[0])) return message.reply(`Indique un ID de USUARIO válido.`)
        let bannedMember = bot.users.fetch(args[0]);
        if(!bannedMember) return message.reply(`No había ningún usuario para Unban.`)
        // Unbanning the person via ID
        serverm.unban(bannedMember);
        // Wrapping it up with a bow
        await message.reply(`**${bannedMember.id}** ha sido unbaneado por ${message.author.tag}.`)
    }
}