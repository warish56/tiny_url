const express = require('express');
const { AUTH_COKKIE_KEY } = require('../constants');
const { isUserLoggedIn, loginUser } = require('../controller/auth');

const router = express.Router();

router.get('/authenticate', async (req, res) => {
     try{
        const isLoggedIn = await isUserLoggedIn(req.cookies);
        res.json({isLoggedIn});
     }catch(err){
        res.json({error: JSON.stringify(err.message)})
     }
})


router.post('/login', async (req, res) => {
    try{
        const {phoneNumber, otp} = req.body;
       const {user, sessionId} = await loginUser(phoneNumber, otp);
       res.cookie(AUTH_COKKIE_KEY, sessionId, {domain: 'app.tiny'});
       res.status(200).json({success: true, user })
    }catch(err){
       res.json({error: err})
    }
})

module.exports = router;