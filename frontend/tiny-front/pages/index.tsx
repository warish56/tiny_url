
import React from 'react';
import { authenticateServerSideProps } from '../common/api';
import { HomePage } from '../pageComponents/home';

const Home = () =>{
    return(
        <HomePage/>
    )
}

export async function getServerSideProps({req}){
    const result = await authenticateServerSideProps(req.headers.cookie, {})
    return result;
  
  }
  

export default Home