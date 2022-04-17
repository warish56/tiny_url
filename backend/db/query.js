const {Pool} = require('pg');

const config = {
    host: 'db',
    user: 'warish',
    port: '5432',
    password: '123456',
    database: 'main',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
}

const poll = new Pool(config);

const query = async (queryString, params) => {
    try{
        const result = await poll.query(queryString, params);
        return result.rows;
    }catch (err){
        throw err;
    }
}

module.exports = {
    query
}