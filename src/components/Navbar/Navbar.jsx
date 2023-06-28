import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss'
import profileIcon from '../../assets/images/profileIcon.png'
import chatIcon from '../../assets/images/chat.png'
import groupIcon from '../../assets/images/group.png'
import newsIcon from '../../assets/images/newsIcon.png'
import musicIcon from '../../assets/images/music.png'
import settingsIcon from '../../assets/images/settings.png'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}><img src={profileIcon} alt="" /> Profile</NavLink>
            </div>
            <div className={styles.item}>
                
                <NavLink to="/messages" activeClassName={styles.active}> <img src={chatIcon} alt="" /> Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active}><img src={groupIcon} alt="" />Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" activeClassName={styles.active}><img src={newsIcon} alt="" />News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" activeClassName={styles.active}><img src={musicIcon} alt="" />Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.active}><img src={settingsIcon} alt="" />Settings</NavLink>
            </div>

        </nav>
    )
}

export default Navbar