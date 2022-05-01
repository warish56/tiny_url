
export const fetchIsAuthenticated = async (cookies:string) => {
    const url = "http://ngnix:80/be/auth/authenticate";
    let result = null;
    const options = {
        method: 'GET',
        headers:{
          Cookie: cookies,
        }
    }
    try{
        const res = await fetch(url,  options);
        const data = await res.json();
        result = data;
    }catch(err){
        console.log("errr===",err);
    } 
    return result && result.isLoggedIn;
}

export const authenticateServerSideProps = async (cookies:string, props:Object) => {
    const isAuthenticated = await fetchIsAuthenticated(cookies);
    if(isAuthenticated){
        return {props}
    }
    return {
        redirect: {
            destination: '/login',
            statusCode: 307
        }
    }
}