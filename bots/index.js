const mineflayer = require('mineflayer')
const os = require('os')

// if (process.argv.length < 4 || process.argv.length > 6) {
//   console.log('Usage : node echo.js <host> <port> [<name>] [<password>]')
//   process.exit(1)
// }

process.env.MC_HOST
process.env.MC_PORT
process.env.MC_USERNAME

var regex = /-/gi;

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: process.env.MC_PORT,
  username: os.hostname().replace(regex, '').slice(15),
  verbose: true
})
console.log(' MC_HOST ', process.env.MC_HOST)
console.log(' MC_PORT ', process.env.MC_PORT)
console.log('Bot : ' + os.hostname() + ' Created')
console.log(' bot', bot)

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(message)
})