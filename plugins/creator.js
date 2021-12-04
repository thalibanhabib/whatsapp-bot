let handler = function (m) {
  this.sendContact(m.chat, '6289687033380', 'Aqlabriyan', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
