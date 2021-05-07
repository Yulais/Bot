const { MessageEmbed } = require("discord.js")
const db = require('quick.db');

module.exports = {
    config: {
        name: "unmute",
        aliases: ["um"],
        description: "Unmutes a member in the discord!",
        usage: "[name | nickname | mention | ID] <reason> (optional)"
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**No tienes permisos para mutear**");

        if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send("**no tengo permisos para mutear!**")
        if (!args[0]) return message.channel.send("**Por favor agrega un usuario**")
        let mutee = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!mutee) return message.channel.send("**Por favor coloca a un usuario valido**");

        let reason = args.slice(1).join(" ");

        let muterole;
        let dbmute = await db.fetch(`muterole_${message.guild.id}`);
        let muteerole = message.guild.roles.cache.find(r => r.name === "muted")

        if (!message.guild.roles.cache.has(dbmute)) {
            muterole = muteerole
        } else {
            muterole = message.guild.roles.cache.get(dbmute)
        }
      
        let rolefetched = db.fetch(`muteeid_${message.guild.id}_${mutee.id}`)
        if (!rolefetched) return;

        if (!muterole) return message.channel.send("**¡No hay función de silencio que eliminar!**")
        if (!mutee.roles.cache.has(muterole.id)) return message.channel.send("**Este usuario no esta muteado!**")
        try {
        mutee.roles.remove(muterole.id).then(() => {
            mutee.send(`**Hola has sido muteado por ${message.guild.name} for ${reason || "No Reason"}**`).catch(() => null)
            let roleadds = rolefetched
            if (!roleadds) return;
            mutee.roles.add(roleadds)
        })
        } catch {
            let roleadds2 = rolefetched
            if (!roleadds2) return;
            mutee.roles.add(roleadds2)                            
          }
            const sembed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`${mutee.user.username} se le ha aplicado unmute`)
            message.channel.send(sembed);
        

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        let embed = new MessageEmbed()
            .setColor("RED")
            .setThumbnail(mutee.user.displayAvatarURL({ dynamic: true }))
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**Moderation**", "unmute")
            .addField("**Unmuted**", mutee.user.username)
            .addField("**Moderator**", message.author.username)
            .addField("**Reason**", `${reason || "**No Reason**"}`)
            .addField("**Date**", message.createdAt.toLocaleString())
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();

        var sChannel = message.guild.channels.cache.get(channel)
        if (!sChannel) return;
        sChannel.send(embed)

    }
}