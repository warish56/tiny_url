import {useState} from 'react'

export const useLogin = () =>{

    const [isLoading, setLoading] = useState(false);

    const toggleLoading = () => {
        setLoading(val => !val);
    }

    const loginUser = async (phoneNumber:string, otp:string) =>{
        const url = "http://localhost:80/be/auth/login";
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
            const res = await fetch(url,  options);
            const data = await res.json();
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