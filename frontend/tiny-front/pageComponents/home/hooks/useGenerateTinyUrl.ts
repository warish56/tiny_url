import {useState} from 'react'
import { appRequestHandler } from '../../../common/utils';
import { APP_URL } from '../../../config';

export const useGenerateTinyUrl = () =>{

    const [isLoading, setLoading] = useState(false);

    const toggleLoading = () => {
        setLoading(val => !val);
    }

    const generateTinyUrl = async (inputUrl:string) =>{
        const url = "/url";

        const body = {
            location: inputUrl
        } as unknown as BodyInit
        const options = {
            body:JSON.stringify(body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            toggleLoading();
            const data = await appRequestHandler(url,  options);;
            console.log("==data==",data);
            return `${APP_URL}/${data.alias}`
        }catch(err){
            console.log("errr===",err);
        }finally{
            toggleLoading();
        }
    }

    return {
        generateTinyUrl,
        isLoading
    }
}