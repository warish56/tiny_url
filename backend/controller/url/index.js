const {query} = require('../../db/query');

const createTinyUrl = async ({userId, location, alias}) => {
    let result = null;
    const queryString = `INSERT INTO URLS (user_id, alias, location) values($1, $2, $3) RETURNING *`
    try{
        result = await query(queryString, [userId, alias, location]);
        result = result[0];
    }catch(err){
        console.log("Url create failed",err);
        throw err;
    }
    return result;
}

const getAliasUrlData = async (alias) => {
    const queryString = `SELECT * FROM URLS WHERE alias=$1`;
    let result = null;
    try{
       result =  await query(queryString,[alias]);
       result = result && result[0]
    }catch(err){
        throw err;
    }
    return result;
}


const getUserAllUrls = async (userId) => {
    const queryString = `SELECT * FROM URLS WHERE user_id=$1`;
    let result = null;
    try{
       result =  await query(queryString,[userId]);
    }catch(err){
        throw err;
    }
    return result;
}


const getUserLocationUrlData = async (userId, location) => {
    const queryString = `SELECT * FROM URLS WHERE user_id=$1 AND location=$2`;
    let result = null;
    try{
       result =  await query(queryString,[userId, location]);
       result = result.length && result[0];
    }catch(err){
        throw err;
    }
    return result;
}

module.exports = {
    createTinyUrl,
    getAliasUrlData,
    getUserAllUrls,
    getUserLocationUrlData
}