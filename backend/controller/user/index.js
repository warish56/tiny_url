const {query} = require('../../db/query')

const createUser = async ({phone}) => {
    let result = null;
    const queryString = `INSERT INTO USERS (phone) values($1) RETURNING *`
    try{
        result = await query(queryString, [phone]);
        result = result[0];
    }catch(err){
        console.log("User create failed",err);
        throw err;
    }
    return result;
}


const getUserById = async (userId) => {
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


const getUserByMobilenumber = async (mobilenNumber) => {
    const queryString = `SELECT * FROM USERS WHERE phone=$1`
    try{
        result = await query(queryString, [mobilenNumber]);
        return result.length && result[0];
    }catch(err){
        throw err;
    }
}


module.exports = {
    createUser,
    getUserById,
    getUserByMobilenumber
}