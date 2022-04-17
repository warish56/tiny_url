const express = require('express');

const homeRouter = require('./home')
const contactRouter = require('./contacts')
const universalRouter = require('./404')

const app = express();

app.use('/home',homeRouter)
app.use('/contacts',contactRouter)
app.use('*', universalRouter);

module.exports = app;