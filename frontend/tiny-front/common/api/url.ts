import { serverRequestHandler } from "../utils";

export const  fetchUserUrlsList = async (cookies:string) => {
    const url = "/url";
    let result = [];
    const options = {
        method: 'GET',
        headers:{
          Cookie: cookies,
        }
    }
    try{
        const data = await serverRequestHandler(url,  options);
        result = data;
        console.log("==urls===", data)
    }catch(err){
        console.log("errr===",err);
    } 
    return Array.isArray(result) ? result :  [] ;
}
