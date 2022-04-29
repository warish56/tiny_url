import {useState} from 'react'

export const useGenerateTinyUrl = () =>{

    const [isLoading, setLoading] = useState(false);

    const toggleLoading = () => {
        setLoading(val => !val);
    }

    const generateTinyUrl = async (inputUrl:string) =>{
        const url = "http://localhost:80/be/url";

        const body = {
            user_id: '1',
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
            const res = await fetch(url,  options);
            const data = await res.json();
            console.log("==data==",data);
            return `http://localhost:8000/${data.alias}`
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