const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!veh') {
    	message.reply(':large_blue_diamond: Police Vehicles :large_blue_diamond: \n police    =    Ford Crown Victoria              | 7 Liveries \n police2  = Dodge Charger                          | 6 Liveries \n police3  = Vanilla Police                              | 0 Liveries \n police4  = Unmarked Ford Taurus             | 0 Liveries \n police5  = Ford Utility (LSPD)                    | 0 Liveries \n police6  = Chevy Tahoe (K9)  (LSPD)      | 0 Liveries \n police7  = Ford Crown Victoria (LSPD)    | 0 Liveries \n police8  = Chevrolet Impala (LSPD)          | 0 Liveries \n sheriff    = Dodge Charger (BCSO)             | 0 Liveries \n sheriff2  = Chevy Tahoe     (BCSO)             | 0 Liveries \n sheriff3  =  Police Interceptor (BSCO)       | 0 Liveries \n fbi            = Unmarked Dodge Charger       | 0 Liveries \n fbi2          = broken N/A                              | 0 Liveries \n hwaycar = Police Interceptor (SAHP)      | 0 Liveries \n hwaycar3= Ford Interceptor Utility  (ST) |0 Liveries');
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Hi! Thanks for using CSRP! Commands are simple once you get the hang of it! \n "!veh" shows you the list of police vehicles. \n "!login" shows you my login info for all the important sites I use. ');
  	}
});

client.on('message', message => {
    if (message.content === '!login') {
    	message.reply('Bitch fuck off you think I was ectually do that, dude idek why you would try it xD.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
