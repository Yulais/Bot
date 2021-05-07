const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `kick`,
        aliases: [`kick`]
    },
    run: async (bot, message, args) => {
        message.delete()
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply(`no tienes permisos`);
        let kuser = message.mentions.members.first()
        if(!kuser) return console.log(`ningún usuario declaró para kickear.`)
        let kreason = args.slice(1).join(" ");
        if(!kreason) kreason = `No reason No hay ninguna razón especificadaspecified.`;
        kuser.kick(`Staff: ${message.author.tag} || Razón: ${kreason}`)
        message.reply(`${kuser} ha sido kickeado por ${message.author.tag} for ${kreason}.`)
    }
}
