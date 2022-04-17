const express = require('express');
const {query} = require('../db/query')

const router = express.Router();

router.get('/', async (req, res) => {
     await query('Insert into users (name, email, phone) values ($1, $2, $3)', ['warish', 'abd@g.com', '123456'])
     const result = await query('select * from users');
     console.log("==result==",result);
    res.json(result)
})

module.exports = router;