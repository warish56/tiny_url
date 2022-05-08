const express = require('express');
const {createTinyUrl, getAliasUrlData, getUserAllUrls, getUserLocationUrlData} = require('../controller/url');
const { getUserById } = require('../controller/user');
const { createRandomStringUrl } = require('../helper');

const router = express.Router();

router.get('/', async (req, res) => {
    try{
    const user = req.user;
    const userUrls = await getUserAllUrls(user.id);
    res.status(200).json(userUrls)
    }catch(err){
        res.status(500).json({error: err});
    }
})

router.post('/', async(req, res, next) => {
    try{

        const {location} = req.body;
        const user = req.user; 

        // 1. check user ID is valid or not
        const userData = await getUserById(user.id);
        if(!userData){
            res.json({error: 'Invalid user id'});
            return;

        }

        //  2. check if max_url amount has exceeded or not
        const maxCreateAmount = userData.max_url;
        const urlsAlreadyCreated = await getUserAllUrls(user.id);
        const alreadyCreated = urlsAlreadyCreated && urlsAlreadyCreated.length;

        if(alreadyCreated >= maxCreateAmount){
            res.json({error: 'Max creation amount exceeded'});
            return;
        }

        //  3. check if already a same location for that same user id is there or not
        const hasLocationSavedData = await getUserLocationUrlData(user.id, location);
        if(hasLocationSavedData){
            res.json(hasLocationSavedData);
            return;
        }

        //  4. create an alias url
        let randomShortUrl = null;
        while(true){
            randomShortUrl = createRandomStringUrl();
            const result = await getAliasUrlData(randomShortUrl);
            if(result){
                continue;
            }
            break;
        }

        const newUrlData = await createTinyUrl({userId: user.id, location, alias: randomShortUrl});
        res.json(newUrlData);

    }catch(err){
        res.json({error: err});
    }

})

module.exports = router;