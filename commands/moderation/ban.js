const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `ban`,
        aliases: [`ban`]
    },
    run: async (bot, message, args) => {
        message.delete()
        if(!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply(`No tienes permisos`)
        let banMember = message.mentions.members.first();
        if(!banMember) return message.reply(`Usted no mencionó a un usuario para banear`)
        let banreason = args.slice(1).join(" ");
        if(!banreason) banreason = `No hay ninguna razón especificada`;
        message.guild.members.ban(banMember, {reason: `Staff: ${message.author.tag} || Reason: ${banreason}`})
        message.reply(`${banMember} Ha sido baneado por ${message.author.tag} for ${banreason}.`)
    }
}