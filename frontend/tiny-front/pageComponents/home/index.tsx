import React, { FormEventHandler, useState } from 'react';
import { useInput } from '../../common/hooks';
import styles from './home.module.css';
import { useGenerateTinyUrl } from './hooks';

export const HomePage = () => {

    const [generatedUrl , setGeneratedUrl] = useState('')
    const {value,inputProps} = useInput()
    const {isLoading, generateTinyUrl} = useGenerateTinyUrl();

    const onSubmit:FormEventHandler = async(e) => {
        e.preventDefault();
        const alias = await generateTinyUrl(value);
        alias && setGeneratedUrl(alias);
    }

    return(
        <main className={styles.container}>
            <form  onSubmit={onSubmit} className={styles.form_container}>
                <label className={styles.input_label}>Enter url</label>
                <input className={styles.input_field} type="text"  {...inputProps}/>
                { isLoading ? "Loading ..." :<button className={styles.submit_btn} type='submit'>Generate</button>}
                {generatedUrl && <a href={generatedUrl} target="_blank" rel='noreferrer'>Shorten Link</a>}
            </form>
        </main>
    )
}