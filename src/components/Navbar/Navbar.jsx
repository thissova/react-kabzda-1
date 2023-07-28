import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.scss'
import profileIcon from '../../assets/images/profileIcon.png'
import chatIcon from '../../assets/images/chat.png'
import groupIcon from '../../assets/images/group.png'
import newsIcon from '../../assets/images/newsIcon.png'
import musicIcon from '../../assets/images/music.png'
import settingsIcon from '../../assets/images/settings.png'
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return (

        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}>
                    <Button><img src={profileIcon} alt=""/> Profile</Button>
                </NavLink>
            </div>

            <div className={styles.item}>
                <NavLink to="/messages" activeClassName={styles.active}>
                    <Button> <img src={chatIcon} alt=""/> Messages</Button>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active}>
                    <Button> <img src={groupIcon} alt=""/> Users</Button>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" activeClassName={styles.active}>
                    <Button> <img src={newsIcon} alt=""/> News</Button>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" activeClassName={styles.active}><Button> <img src={musicIcon}
                                                                                   alt=""/> Music</Button></NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.active}><Button> <img src={settingsIcon}
                                                                                      alt=""/> Settings</Button></NavLink>
            </div>

        </nav>
    )
}

export default Navbar