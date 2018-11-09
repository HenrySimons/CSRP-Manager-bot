const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!veh') {
    	message.reply(':large_blue_diamond: Police Vehicles :large_blue_diamond: \n police    =    Ford Crown Victoria              | 7 Liveries');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
