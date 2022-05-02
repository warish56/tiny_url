const { AUTH_COKKIE_KEY } = require("../constants");
const { isUserLoggedIn } = require("../controller/auth");
const { getUserFrommSessionId } = require("../controller/session");
const { getUserById } = require("../controller/user");


const authMiddleware = async (req,res, next) => {
    /**
     * 1. check if auth cookie is there or not
     * 2. if present then extract the session id from cookie
     * 3. extract the expiration time from session id
     * 4. check expiration
     */
    let isAuthenticated = false;
    const sessionId =req.cookies[AUTH_COKKIE_KEY];
    try{
        const isLoggedIn = await isUserLoggedIn(req.cookies);
        if(isLoggedIn){
            isAuthenticated = true;
            const userId = await getUserFrommSessionId(sessionId);
            req.user = await getUserById(userId);
        }

        if(!isLoggedIn){
            res.status(401).json({error: {
                message: 'Unauthenticated'
            }})
            return;
        }
    }catch(err){
        next(err);
    }
    next();
}

module.exports={
    authMiddleware
}