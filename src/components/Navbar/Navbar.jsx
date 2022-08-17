import React from "react";
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a href="/messages">Messages</a>
            </div>
            <div className={styles.item}>
                <a href="#/">News</a>
            </div>
            <div className={styles.item}>
                <a href="#/">Music</a>
            </div>
            <div className={styles.item}>
                <a href="#/">Settings</a>
            </div>

        </nav>
    )
}

export default Navbar