import React, { ReactChild } from "react";
import { Drawer } from "../../components";

import styles from './appLayout.module.css'

type AppLayoutProps = {
    children: ReactChild,
    isLoggedIn: boolean
}

export const AppLayout = ({children, isLoggedIn}:AppLayoutProps) => {
    return(
        <div className={styles.container}>
            <aside className={styles.left_cont}>
                {isLoggedIn && <Drawer />}
            </aside>
            <main className={styles.right_cont}>
                {children}
            </main>
        </div>
    )
}