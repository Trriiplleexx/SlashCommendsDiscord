const Discord = require("discord.js")
//====================================
const express = require("express")
const 𝒀𝒂𝒉𝒚𝒂 = express();
𝒀𝒂𝒉𝒚𝒂.get("/", (yahya , YAHYA) => {
YAHYA.send("DEV YAHYA") 
})
𝒀𝒂𝒉𝒚𝒂.listen(3030, () => {
  console.clear()
  console.log("33[1;34m yahya started")
})
const client = new Discord.Client({
  intents : 32767
})
const {
  EmbedBuilder , Client ,SlashCommandBuilder, Routes, 
} = require("discord.js")
const db = require("pro.db")
//Dev Yahya
//V14
client.login(process.env.TOKEN)
//====================================
const { REST } = require('@discordjs/rest');
client.on("ready", () => {
  //Dev Yahya
//V14
  console.log(`${client.user.username} Ready now !!`)
  client.user.setActivity(`OweisEuoilt🍁
`, { type: "PLAYING" })

const commands = [
new SlashCommandBuilder().setName('hello').setDescription('hello'),
 new SlashCommandBuilder().setName("hi").setDescription("hi"),
new SlashCommandBuilder().setName("wow").setDescription("wow")
]
const rest = new REST({ version: '10' }).setToken(process.env.token);

    (async () => {
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: commands },
            );
            //console.log("Done Run ApplicationCommands");
        } catch (error) {
            console.error(error);
        }
    })();
})
//Dev Yahya
//V14
//====================================
client.on("interactionCreate", async (yahya) => {
  if (yahya.commandName === "hello") {
  yahya.reply({content : "hello", ephemeral: true})
} //Dev Yahya
//V14
  if (yahya.commandName === "hi") {
    yahya.reply({content : "hello", ephemeral: true})

}
})  
