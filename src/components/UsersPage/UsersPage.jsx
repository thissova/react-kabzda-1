import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./Users/Users";


let UsersPage = (props) => {
    return (
        <div>
            <Paginator multiplier={props.multiplier}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       pagesInLine={props.pagesInLine}
                       setMultiplierBigger={props.setMultiplierBigger}
                       setMultiplierSmaller={props.setMultiplierSmaller}
            />
            <User followingInProgress={props.followingInProgress} followRequest={props.followRequest} unfollowRequest={props.unfollowRequest} users={props.users}/>
        </div>
    )
}


export default UsersPage