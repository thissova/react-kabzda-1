import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss'
import profileIcon from '../../assets/images/profileIcon.png'
import chatIcon from '../../assets/images/chat.png'
import groupIcon from '../../assets/images/group.png'
import newsIcon from '../../assets/images/newsIcon.png'
import musicIcon from '../../assets/images/music.png'
import settingsIcon from '../../assets/images/settings.png'
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return (

        <nav className={styles.nav}>

            <Button className={styles.item}><NavLink to="/profile" activeClassName={styles.active}><img src={profileIcon} alt="" /> Profile</NavLink></Button>

            <div className={styles.item}>

                <Button><NavLink to="/messages" activeClassName={styles.active}> <img src={chatIcon} alt="" /> Messages</NavLink></Button>
            </div>
            <div className={styles.item}>
                <Button><NavLink to="/users" activeClassName={styles.active}> <img src={groupIcon} alt="" /> Users</NavLink></Button>
            </div>
            <div className={styles.item}>
                <Button><NavLink to="/news" activeClassName={styles.active}> <img src={newsIcon} alt="" /> News</NavLink></Button>
            </div>
            <div className={styles.item}>
                <Button><NavLink to="/music" activeClassName={styles.active}> <img src={musicIcon} alt="" /> Music</NavLink></Button>
            </div>
            <div className={styles.item}>
                <Button><NavLink to="/settings" activeClassName={styles.active}> <img src={settingsIcon} alt="" /> Settings</NavLink></Button>
            </div>

        </nav>
    )
}

export default Navbar