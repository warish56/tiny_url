
export const  fetchUserUrlsList = async (cookies:string) => {
    const url = "http://ngnix:80/be/url/";
    let result = [];
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
    return Array.isArray(result) ? result :  [] ;
}
