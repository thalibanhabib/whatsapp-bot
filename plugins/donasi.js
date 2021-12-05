let handler = async m => m.reply(`
╭─「 Donasi 」
│ *Aqlabriyan*
│
│ • Three [089687033380]
│ • Gopay / Ovo [089687033380]
╰────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
