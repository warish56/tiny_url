const express = require('express');
const cookieParser = require('cookie-parser')
const rootRouter = require('./routes');

const app = express();

//   CORS bypass
app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', '*');
    next();
})
 

// body parser
app.use(express.json());
// cookie parser
app.use(cookieParser());

//  Routes
app.use(rootRouter)

app.listen('8000', () => {
    console.log(" listning to post 8000")
})