var CronJob = require('cron').CronJob;
new CronJob('0 0 8 26 07 *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');