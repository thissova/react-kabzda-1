import React from "react";
import styles from './Header.module.scss'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' alt="header_logo" />

            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>login</NavLink>}
               
            </div>
        </header>
    )
}

export default Header