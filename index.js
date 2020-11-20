const mf = require("mineflayer");
const mfv = require("prismarine-viewer").mineflayer;
const fs = require("fs");
if (!fs.existsSync("./config.json")) {console.log("please read the documentation @ https://github.com/normanlol/minespy !"); return;}
const config = JSON.parse(fs.readFileSync("./config.json"));

console.log("-- minespy starting --");
console.log("-- conecting to " + config.serverHost + ":" + config.serverPort + " -- ");

const mcBot = mf.createBot({
    host: config.serverHost,
    port: config.serverPort,
    username: config.mcUsername,
    password: config.mcPassword
});

mcBot.once("spawn", function () {
    console.log("-- logged in and spawned --");
    mfv(mcBot, {
        port: config.imageServerPort,
        firstPerson: config.firstPerson
    });
})