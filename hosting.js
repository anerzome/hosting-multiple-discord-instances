const api = require("discord.js");
const fs = require('fs');

const data = fs.readFileSync('tokens.txt', 'UTF-8');
const lines = data.split(/\r?\n/);

lines.forEach((line) => {
    Hosting(line);
});

function Hosting(token)
{
    const userclient = new api.Client()
    userclient.on("ready", () => { 
 userclient.user.setActivity("{activity name}"); 
        console.log('Connected: ' + userclient.user.tag);
    });
    userclient.login(token);
}

process.on('uncaughtException', function (exception) {
});
process.on('unhandledRejection', error => {
});

keep_alive()
