const express = require('express');
const { getAliasUrlData } = require('../controller/url');

const router = express.Router();

router.get('/:route_alias', async (req, res) => {
     try{
        const result = await getAliasUrlData(req.params.route_alias);
        res.redirect(result ? result.location : '/404');
     }catch(err){
        res.json({error: err})
     }
})

module.exports = router;