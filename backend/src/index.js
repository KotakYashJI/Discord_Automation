import { Client, GatewayIntentBits } from "discord.js"
import dotenv from "dotenv"
import { textgenerator } from "./services/ai.service.js";

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("clientReady", () => {
    console.log("Bot is ready");
});

client.on("messageCreate", async (message) => {
    const content = message.content;
    const response = await textgenerator(content);
    const isBot = message.author.bot;
    if (isBot) return
    message.reply(response);
})

client.login(process.env.DISCORD_BOT_TOKEN);