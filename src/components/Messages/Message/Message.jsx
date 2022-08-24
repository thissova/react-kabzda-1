import React from "react";
import styles from './../Messages.module.scss'


const Message = (props) => {

    if (props.id === 0){
        return (
            <div className={`${styles.message} ${styles.rightSide}`}>
                <img src={props.img} alt="" />
                <b className={styles.text}>{props.message}</b>
            </div>
        )}
    else
        return (
            <div className={`${styles.message} ${styles.leftSide}`}>
                <img src={props.img} alt="" />
                <b className={styles.text}>{props.message}</b>
            </div>
        )

    
}

export default Message