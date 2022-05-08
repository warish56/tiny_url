
import {APP_URL, SERVER_URL} from '../../config';

const requestHandler = async (url:string, options: Object):Promise<any> => {
    try{
        const response = await fetch(url, options);
        if(!response.ok){
            throw response;
        }
        const data = await response.json();
        return data;
    }catch(err){
        throw err;
    }
 }

 const createRequestHandler = function(baseUrl:string){
    return (url:string, options: Object) => {
            const newUrl = `${baseUrl}${url}`;
            return requestHandler(newUrl, options)
    }
 }

 export const appRequestHandler = createRequestHandler(APP_URL);
 export const serverRequestHandler = createRequestHandler(SERVER_URL);