import React, { ReactChild } from "react";
import { Drawer } from "../../components";

import styles from './appLayout.module.css'

type AppLayoutProps = {
    children: ReactChild
}

export const AppLayout = ({children}:AppLayoutProps) => {
    return(
        <div className={styles.container}>
            <aside className={styles.left_cont}>
                <Drawer />
            </aside>
            <main className={styles.right_cont}>
                {children}
            </main>
        </div>
    )
}