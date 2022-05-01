
const {query}  = require('../../db/query');
const { addToDate } = require('../../helper/date');

const EXPIRATION_TIME = ((60*60)*24) * 1; // 1 day 


const createUserSession = async(userId) => {
    const queryString = `INSERT INTO SESSIONS (user_id, expiration) VALUES ($1, $2) RETURNING *`;
    const expirationTimeFromNow = addToDate(Date.now(), EXPIRATION_TIME);
    try{
       const session = await query(queryString, [userId, expirationTimeFromNow]);
       return session[0];
    }catch(err){
        throw err;
    }
}

const getUserFrommSessionId = async(sessionId) => {
    const queryString = `SELECT * from SESSIONS where id=$1`;
    try{
       const session = await query(queryString, [sessionId]);
       return session[0].user_id;
    }catch(err){
        throw err;
    }
}

const deleteUserSession = async(sessionId) => {
    const queryString = `DELETE FROM SESSIONS WHERE id=$1`;
    try{
       const session = await query(queryString, [sessionId]);
    }catch(err){
        throw err;
    }
}

const isUserSessionExpired = async(sessionId) => {
    const queryString = `SELECT * FROM SESSIONS where id=$1`;
    try{
       const session = await query(queryString, [sessionId]);
       if(!session.length){
           return true;
       }
       const expiration = session[0].expiration;
       return Date.now() > new Date(expiration)
    }catch(err){
        throw err;
    }
}

module.exports={
    createUserSession,
    deleteUserSession,
    isUserSessionExpired,
    getUserFrommSessionId
}