import Link from 'next/link';
import React, {FC} from 'react';

import styles from './drawer.module.css';


type DrawerLinksProps = {
    location: string
    title: string
}

const DrawerLink = ({location, title}:DrawerLinksProps) => {
    return(
        <div className={styles.link_container}>
            <Link href={location} passHref>
                <a>{title}</a>
            </Link>
        </div>
    )
}

export const Drawer:FC = () => {
    return(
        <nav className={styles.container}>
            <DrawerLink location='/' title='Home' />
            <DrawerLink location='/url' title='Urls'/>
            
        </nav>
    )
};