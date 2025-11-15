import { Bot } from '@maxhub/max-bot-api';


const bot = new Bot(process.env.TOKEN);
const base_api = process.ML_BASE_API;
bot.on('message_created', async (ctx) => { 
    const msg = await ctx.getMessage()
    var response = fetch(`${base_api}/query`, {
        method: "POST",
        headers: {},
        body: {
            message: msg.body.text,
            thread_id: ctx.chatId
        }
    })
    const json = (await response).json()
    ctx.reply(json.response);
})
bot.start()