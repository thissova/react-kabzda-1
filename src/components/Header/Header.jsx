import React from "react";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' alt="header_logo"/>
        </header>
    )
}

export default Header