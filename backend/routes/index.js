const express = require('express');

const { authMiddleware } = require('../middlewares/auth');

const homeRouter = require('./home')
const urlRouter = require('./url')
const authRouter = require('./auth')
const universalRouter = require('./404');

const app = express();

//  Un-Protected Routes
app.use('/auth',authRouter)

// Middlewares

/**
 *  adds user data to request object if authenticated. req.user
 */
app.use(authMiddleware);

//  Protected Routes
app.use('/url', urlRouter);
app.use('/404', universalRouter);
app.use('/',homeRouter)

// app.use('*', universalRouter);

module.exports = app;