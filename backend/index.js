const express = require('express');
const rootRouter = require('./routes');
const app = express();

app.use(rootRouter)

app.listen('8000', () => {
    console.log(" listning to post 8000")
})