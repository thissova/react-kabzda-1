import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from '../../../assets/images/user_icon.png'
import styles from './Users.module.scss'


let Users = ({users, followingInProgress, unfollowRequest, followRequest}) => {
    return (
        <div>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar'
                                     className={styles.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button disabled={followingInProgress.some(id => id === u.id)}
                                                  className={styles.unfollow} onClick={
                                () => {

                                    unfollowRequest(u.id)
                                }
                            }>Unfollow</button> : <button disabled={followingInProgress.some(id => id === u.id)}
                                                          className={styles.follow} onClick={
                                () => {
                                    followRequest(u.id)
                                }
                            }>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}


export default Users