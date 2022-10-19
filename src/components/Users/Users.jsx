import React from "react";
import styles from './Users.module.scss'

const Users = (props) => {
    debugger
    if (props.users.length < 1) {
        props.setUsers([
            { id: 1, photoUrl: 'https://i.pinimg.com/236x/8e/a3/42/8ea342948281bd784626051d950a9f9f.jpg', followed: true, fullName: 'Ivan', status: '', location: { city: 'Sumy', country: 'Ukraine' } },
            { id: 2, photoUrl: 'https://i.pinimg.com/236x/8e/a3/42/8ea342948281bd784626051d950a9f9f.jpg', followed: true, fullName: 'Dmitry', status: '', location: { city: 'Sumy', country: 'Ukraine' } },
            { id: 3, photoUrl: 'https://i.pinimg.com/236x/8e/a3/42/8ea342948281bd784626051d950a9f9f.jpg', followed: true, fullName: 'Kep', status: '', location: { city: 'Sumy', country: 'Ukraine' } },
        ])
    }
    debugger
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt='avatar' className={styles.avatar} />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users