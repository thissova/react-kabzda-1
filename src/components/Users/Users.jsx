import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from '../../assets/images/user_icon.png'
import styles from './Users.module.scss'


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagesInLine = props.pagesInLine
    let pages = []
    let valuesInLine = pagesInLine * props.multiplier


    for (let i = 1; i <= pagesInLine; i++) {
        pages.push(i + valuesInLine)
    }
    return (
        <div>
            <div className={styles.pagination}>
                <span className={props.currentPage === 1 ? styles.selected : styles.unselected}
                      onClick={() => props.onPageChanged(1)}>
                    {1 + ' | '}
                </span>
                <button disabled={props.multiplier === 0} onClick={() => props.setMultiplierSmaller(1)}>←</button>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selected : styles.unselected}
                                 onClick={() => props.onPageChanged(p)}>
                        {p + ' '}
                    </span>
                })}
                <button disabled={props.multiplier === Math.floor(pagesCount / pagesInLine)} onClick={() => props.setMultiplierBigger(1)}>→
                </button>
                <span className={props.currentPage === pagesCount ? styles.selected : styles.unselected}
                      onClick={() => props.onPageChanged(pagesCount)}>
                    {' |' + pagesCount + ' '}
                </span>
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar'
                                     className={styles.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  className={styles.unfollow} onClick={
                                () => {

                                    props.unfollowRequest(u.id)
                                }
                            }>Unfollow</button> : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                          className={styles.follow} onClick={
                                () => {
                                    props.followRequest(u.id)
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