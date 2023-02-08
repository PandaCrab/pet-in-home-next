import React, { useState, useEffect, useRef } from "react";

import styles from '../styles/SiteLayout.module.scss';

interface Props {
    children: React.ReactElement
}

const SiteLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <div className={styles.wrapper}>
                    <div className={styles.logo}>Logo</div>
                </div>
                <div className={styles.wrapper}>
                    <button className={styles.logInBtn}>Log In</button>
                </div>
            </div>
            <div className={styles.mainFooterWrapper}>
                <div className={styles.main}>{ children }</div>
            </div>
        </div>
    )
};
