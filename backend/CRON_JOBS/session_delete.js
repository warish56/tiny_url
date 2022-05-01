const { query } = require("../db/query");

const deleteExpiredSessions = async () => {
    try{
        const queryString = 'DELETE FROM SESSIONS where now() > expiration'
        await query(queryString)
    }catch(err){
        console.log(" === CRON ERROR ====",err);
    }
}

module.exports={
    deleteExpiredSessions
}
