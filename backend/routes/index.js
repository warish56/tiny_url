const express = require('express');

const homeRouter = require('./home')
const contactRouter = require('./contacts');
const urlRouter = require('./url')

const universalRouter = require('./404')

const app = express();

app.use('/contacts',contactRouter)
app.use('/url', urlRouter);
app.use('/404', universalRouter);
app.use('/',homeRouter)

app.use('*', universalRouter);

module.exports = app;