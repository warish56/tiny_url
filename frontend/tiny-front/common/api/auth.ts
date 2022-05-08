import { serverRequestHandler } from "../utils";

export const fetchIsAuthenticated = async (cookies:string) => {
    const url = "/auth/authenticate";
    let result = null;
    const options = {
        method: 'GET',
        headers:{
          Cookie: cookies,
        }
    }
    try{
        const data = await serverRequestHandler(url, options);
        result = data;
    }catch(err){
        console.log("errr===",err);
    } 
    return result && result.isLoggedIn;
}

export const authenticateServerSideProps = async (cookies:string, props:Object) => {
    const isAuthenticated = await fetchIsAuthenticated(cookies);
    if(isAuthenticated){
        return {props:{
            ...(props || {}),
            isLoggedIn: true
        }}
    }
    return {
        redirect: {
            destination: '/login',
            statusCode: 307
        }
    }
}