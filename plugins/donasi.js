let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Indosat Ooredoo [089687033380]
│ • Gopay / Ovo [089687033380]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
