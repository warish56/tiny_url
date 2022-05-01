const jwt = require('jsonwebtoken');
const { AUTH_COKKIE_KEY } = require('../../constants');
const { createUserSession, isUserSessionExpired } = require('../session');
const { getUserByMobilenumber, createUser } = require('../user');



// const PRIVATE_KEY = '1jh23c2n#$R@3bkj2n34';
// const EXPIRATION_TIME = ((60*60*60)*24) * 1; // 1 day 

// const signToken = (data) => {
//     return new Promise((res, rej) => {
//         jwt.sign(data,PRIVATE_KEY,{
//             expiresIn: EXPIRATION_TIME
//         },(err, token) => {
//             if(err){
//                 rej(err.name);
//             }else{
//                 res(token);
//             }
//         })
//     })
// }

// const verifyToken = (token) => {
//     return new Promise((res, rej) => {
//         jwt.verify(token,PRIVATE_KEY,(err, data) => {
//             if(err){
//                 rej(err.name);
//             }else{
//                 res(data);
//             }
//         })
//     })
// }


const loginUser = async(mobileNumber, otp) => {
    /**
     * 1. verify OTP
     * 2. check If mobile number is present in DB, if not then create the user
     * 3. create user session
     * 4. set the session id in the cokkie
     */

    try{
        let user = await getUserByMobilenumber(mobileNumber);
        if(!user){
            user = await createUser({phone: mobileNumber});  
        }
        const session = await createUserSession(user.id);
        return {user, sessionId: session.id};
    }catch(err){
        throw err;
    }

}

const isUserLoggedIn = async (cookies) => {
    const sessionId  = cookies[AUTH_COKKIE_KEY];
    let isLoggedIn = false;
    try{
        if(sessionId){
            const isExpired = await isUserSessionExpired(sessionId);
            if(!isExpired){
                isLoggedIn = true;
            }
        }
        return isLoggedIn;
    }catch(err){
        throw err;
    }
    
}

module.exports = {
    loginUser,
    isUserLoggedIn
}