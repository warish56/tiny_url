import React, { useMemo } from 'react'
import { IUrlData, IUrlList } from '../../common/types';
import { APP_URL } from '../../config';

import styles from './url.module.css';


const UrlItem = ({alias, location}:IUrlData) => {
    return(
        <div className={styles.url_cont}>
            <div className={styles.group_cont}>
                <span className='label'>Alias</span>
                <a href={`${APP_URL}/${alias}`} target="_blank" rel='noreferrer'>{alias}</a>
            </div>
            <div className={styles.group_cont}>
                <span className='label'>Location</span>
                <a href={location} target="_blank" rel='noreferrer'>{location}</a>
            </div>
        </div>
    )
}

export const UrlPageList = ({urls}:IUrlList) => {
    const list = useMemo(() => {
        return urls.map((url) => {
            return <UrlItem key={url.id} {...url}/>
        })
    }, [urls])
    return(
        <section className={styles.container}>
            {list}
        </section>
    )
}
