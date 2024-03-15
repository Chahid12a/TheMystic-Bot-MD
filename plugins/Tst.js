const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('message', message => {
  if(message.body === '.txht') {
    message.reply('هذه هي الرسالة التي طلبتها.');
  }
});

client.initialize();
