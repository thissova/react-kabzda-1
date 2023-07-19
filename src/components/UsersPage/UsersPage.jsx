import React from "react";
import Paginator from "../common/Paginator/Paginator";
import Users from "./Users/Users";


let UsersPage = (props) => {
    return (
        <div>
            <Paginator multiplier={props.multiplier}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       portionSize={props.pagesInLine}
            />
            <Users followingInProgress={props.followingInProgress} followRequest={props.followRequest} unfollowRequest={props.unfollowRequest} users={props.users}/>
        </div>
    )
}


export default UsersPage