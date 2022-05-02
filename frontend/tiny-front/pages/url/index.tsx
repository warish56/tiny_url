import React from "react";
import { fetchUserUrlsList } from "../../common/api";
import { IUrlList } from "../../common/types";
import { UrlPageList } from "../../pageComponents/url";

type UrlPageProps = {} & IUrlList

const UrlPage = ({urls}:UrlPageProps) => {
    return(
         <UrlPageList urls={urls}/>   
    )
}

export async function getServerSideProps({req}){
    const result = await fetchUserUrlsList(req.headers.cookie)
    console.log("==res==",result)
    return {
        props:{
            urls: result
        }
    }
}

export default UrlPage;