import { Bot } from '@maxhub/max-bot-api';


const bot = new Bot(process.env.TOKEN);
const base_api = process.env.ML_BASE_API;
bot.on('message_created', (ctx) => {
    const msg = ctx.message
    const asf = async (msg) => {
        var response = await fetch(`${base_api}/query`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {
                "message": msg.body.text,
                "thread_id": msg.recipient.chat_id.toString()
                })
            })
        const json = await response.json()
        console.log(msg.recipient.chat_id, json.response, json, msg.body.text, msg.body, msg)
        bot.api.sendMessageToChat(msg.recipient.chat_id, json.response)
    } 
    asf(msg)
})
bot.start()