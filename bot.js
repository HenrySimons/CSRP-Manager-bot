const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!veh') {
    	message.reply(':large_blue_diamond: Police Vehicles :large_blue_diamond: 
police    =    Ford Crown Victoria              | 7 Liveries
police2  = Dodge Charger                          | 6 Liveries 
police3  = Vanilla Police                              | 0 Liveries 
police4  = Unmarked Ford Taurus             | 0 Liveries
police5  = Ford Utility (LSPD)                    | 0 Liveries 
police6  = Chevy Tahoe (K9)  (LSPD)      | 0 Liveries 
police7  = Ford Crown Victoria (LSPD)    | 0 Liveries
police8  = Chevrolet Impala (LSPD)          | 0 Liveries
sheriff    = Dodge Charger (BCSO)             | 0 Liveries
sheriff2  = Chevy Tahoe     (BCSO)             | 0 Liveries
sheriff3  =  Police Interceptor (BSCO)       | 0 Liveries 
fbi            = Unmarked Dodge Charger       | 0 Liveries
fbi2          = broken N/A                              | 0 Liveries
hwaycar = Police Interceptor (SAHP)      | 0 Liveries
hwaycar3= Ford Interceptor Utility  (ST) |0 Liveries ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
