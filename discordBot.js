require("dotenv").config();
const axios = require("axios");
const Discord = require("discord.js");
const bot = new Discord.Client();

axios.defaults.baseURL = process.env.BASE_URL;
1
const prefix = "!";

bot.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "character") {
        const characterId = await axios.get(`/character/search?name=${args.join("+")}`)
            .then(({ data }) => {
                console.log(data.Results);
                if (data.Results.length > 1) {
                    message.reply('More than one character found');
                }
                else {
                    return data.Results[0].ID;
                };
            });

            console.log(characterId)
        const characterProfile = axios.get(`/character/${characterId}?extended=1&data=AC,FR,FC,FCM,MIMO,PVP`)
            .then((res) => {
                console.log(res);
            });
    };
});

bot.login(process.env.BOT_TOKEN);