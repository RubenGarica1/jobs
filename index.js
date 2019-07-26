

 var CronJob = require('cron').CronJob;
 const datos = [{name: "ruben", date:"0 48 14 25 07 *"}, {name:'ada', date :"0 10 10 25 07 *"} ]
 datos.forEach(res =>{
     new CronJob(res.date, function() {
        console.log(`--------------------------${res.name}-----------------------------------`)
        console.log(Date())
        console.log(`hola ${res.name} que onda son las ${res.date}`);
      }, null, true, 'America/Los_Angeles');
})


new CronJob('0 51 14 * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
