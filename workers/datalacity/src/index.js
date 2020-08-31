const schedule = require('node-schedule');
const database = require('./utils/database');
const Worker = require('./worker');

database.init();
schedule.scheduleJob('0 11 * * * *', Worker.run);