import React from "react";
import styles from './../Messages.module.scss'


const Message = (props) => {
    if (props.id === 0){
        return (
            <div className={`${styles.message} ${styles.rightSide}`}>
                <div>
                    <img src={props.img} alt=""/>
                </div>
                <b className={styles.text}>{props.message}</b>
            <br/>
                <br/>
                <br/>
            </div>
        )}
    else
        return (
            <div className={`${styles.message} ${styles.leftSide}`}>
                <div>
                    <img src={props.img} alt=""/>
                </div>
                <b className={styles.text}>{props.message}</b>
            </div>
        )
}

export default Message