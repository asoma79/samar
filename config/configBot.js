require('dotenv').config()
const { Telegraf } = require('telegraf')
const consign = require('consign')
const { TOKEN } = process.env

module.exports = () => {
    
    const bot = new Telegraf(7865067259:AAGU_oTsaufj77YbFgsBrs4Xz761HdwusX0)

    consign()
        .include('controllers')
        .into(bot)

    return bot
}

