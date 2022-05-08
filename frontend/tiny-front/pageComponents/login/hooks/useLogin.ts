import {useState} from 'react'
import { appRequestHandler } from '../../../common/utils';

export const useLogin = () =>{

    const [isLoading, setLoading] = useState(false);

    const toggleLoading = () => {
        setLoading(val => !val);
    }

    const loginUser = async (phoneNumber:string, otp:string) =>{
        const url = "/auth/login";
        let result = null;
        const body = {
            phoneNumber,
            otp
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
            const data = await appRequestHandler(url,  options);
            result = data;
            console.log("==data==",data);
        }catch(err){
            console.log("errr===",err);
        }finally{
            toggleLoading();
        }
        return result;
    }

    return {
        loginUser,
        isLoading
    }
}