const { Client , MessageAttachment } = require('discord.js');
const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});


client.on("ready", async () => {

    console.log(`${client.user.username} 上線了 `)
    
})



client.on("message", async message => {

let botID = message.author.id


    if (message.guild)  return;
    if (botID == "449911406456864778") return;

    console.log(`${message.createdAt} ${message.author.username}  ${message.content} `);


    if(message.attachments.size == 0){

    let  User = message.author


    client.channels.cache.get(`695934526118952970`).send(`匿名 ： ${message.content} \n ** ** `);

    User.send('文字訊息已發送成功');

}
    else {
        
    const Url = message.attachments


    const attached = new MessageAttachment(Url.array()[0].url)


    let  User = message.author

 
    client.channels.cache.get(`695934526118952970`).send(`匿名：${message.content}`,(attached))

    User.send('圖片訊息已發送成功');

 
    console.log(`${message.createdAt} ${message.author.username} ${Url.array()[0].url}`);
}


});

const Today = new Date();

var Year = Today.getFullYear();
var Month = (Today.getMonth() + 1);
var Day = Today.getDate();
var hour = Today.getHours();
var minute = Today.getMinutes();

var NowDate = Year + '.' + Month + '.' + Day + '.' + hour + '.' + minute

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/log/' + NowDate + '.log' ,{flags : 'w'});

var log_stdout = process.stdout;

console.log = function(d) { //

  log_file.write(util.format(d) + '\n');

  log_stdout.write(util.format(d) + '\n');

};

client.login("NDQ5OTExNDA2NDU2ODY0Nzc4.XpGnhg.LGIb0sgUxzfM4l2dFNH4BGslnv8");