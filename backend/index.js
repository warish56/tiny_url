const express = require('express');
const rootRouter = require('./routes');
const app = express();


app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', '*');
    next();
})
 

app.use(express.json());
app.use(rootRouter)

app.listen('8000', () => {
    console.log(" listning to post 8000")
})