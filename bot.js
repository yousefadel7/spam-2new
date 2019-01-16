const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const prefix1 = "1" // برفكس
const prefix2 = "2" // برفكس

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : A7med_l `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});

client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By A7med_l , Farm Credit By A7med_l, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By A7med_l , Farm Credit By A7med_l, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix1)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix1.length);

  let args = message.content.split(" ").slice(1);


  if (command === "say") { /// اكتب البرفيكس ثم الامر
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }


});
client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix2)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix2.length);

  let args = message.content.split(" ").slice(1);


  if (command === "say") { /// اكتب البرفيكس ثم الامر
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }


});
client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
