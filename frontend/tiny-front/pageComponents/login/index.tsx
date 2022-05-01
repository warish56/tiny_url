import { useRouter } from 'next/router';
import React, { FormEventHandler } from 'react';
import { useInput } from '../../common/hooks';
import { useLogin } from './hooks/useLogin';

import styles from './login.module.css';

export const LoginPage = () => {

    const {loginUser, isLoading} = useLogin();
    const router = useRouter()
    const {value: mobileNumber, inputProps:mobileInputProps} = useInput();
    const {value: otp, inputProps: otpInputProps} = useInput()

    const navigateToHomePage = () => {
        router.push('/');
    }

    const onSubmit:FormEventHandler<HTMLFormElement> = async(e) => {
        e.preventDefault();
        if(!mobileNumber || !otp){
            return;
        }
        const success =  await loginUser(mobileNumber, otp);
        console.log("==succes==",success)
        if(success){
            navigateToHomePage();
        }
    }
    return(
        <main className={styles.container}>
            <form onSubmit={onSubmit} className={styles.form_container}> 
                <div className={styles.input_wrapper}>
                    <label className={styles.input_label} htmlFor='user_mobile'>Enter mobile number</label>
                    <input {...mobileInputProps} className={styles.input_field} id="user_mobile" type="text"/>
                </div>

                <div className={styles.input_wrapper}>
                    <label className={styles.input_label} id="user_otp">Enter Otp</label>
                    <input {...otpInputProps} className={styles.input_field} id="user_otp" type="text"/>
                </div>

                {isLoading ? <span>Loading ...</span> : <button className={styles.submit_btn} type="submit">Login</button>}
            </form>
        </main>
    )
}