const {query} = require('../../db/query')

const createUser = async ({name, email, phone}) => {
    let result = null;
    const queryString = `INSERT INTO USERS (name, email, phone) values($1, $2, $3) RETURNING *`
    try{
        result = await query(queryString, [name, email, phone]);
    }catch(err){
        console.log("User create failed",err);
        throw err;
    }
    return result;
}


const getUserData = async (userId) => {
    let result = null;
    const queryString = `SELECT * FROM USERS WHERE id=$1`
    try{
        result = await query(queryString, [userId]);
        result = result.length && result[0];
    }catch(err){
        throw err;
    }
    return result;
}
module.exports = {
    createUser,
    getUserData
}