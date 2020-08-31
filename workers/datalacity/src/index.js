const schedule = require('node-schedule');
const database = require('./utils/database');
const Worker = require('./worker');

database.init();
schedule.scheduleJob('* * 20 * * *', Worker.run);