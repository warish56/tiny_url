const express = require('express');
const cookieParser = require('cookie-parser')
const rootRouter = require('./routes');
const {runCronJobs} = require('./CRON_JOBS')

const app = express();

// body parser
app.use(express.json());

// cookie parser
app.use(cookieParser());

//  Routes
app.use(rootRouter)

// Run CRON jobs
runCronJobs();

app.listen('8000', () => {
    console.log(" listning to post 8000")
})