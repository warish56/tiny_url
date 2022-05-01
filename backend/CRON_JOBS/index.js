
const cron = require('node-cron');
const {deleteExpiredSessions}  = require('./session_delete')

const jobs = [];

const createCronJob = (jobName, timePattern, callback) => {
    const task = cron.schedule(timePattern, () => { 
        console.log(" == RUNNING CRON ====",jobName);
        callback(); 
    });
    jobs.push(task);
    return task;
}



const runCronJobs = () => {
    createCronJob('DELETE_USER_SESSIONS','*/1 * * * *',deleteExpiredSessions);
    jobs.forEach(job => {
        job.start();
    })
}

module.exports = {
    runCronJobs
}