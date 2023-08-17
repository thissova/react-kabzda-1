import React from "react";
import Paginator from "../common/Paginator/Paginator";
import Users from "./Users/Users";
import {UserType} from "../../data/users-reducer";

type PropsType = {
    currentPage: number
    followRequest: (userId: number) => void
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    pagesInLine: number
    totalUsersCount: number
    unfollowRequest: (userId: number) => void
    users: Array<UserType>
}
let UsersPage: React.FC<PropsType> = ({
                     currentPage, onPageChanged,
                     totalUsersCount, pageSize,
                     pagesInLine, followingInProgress,
                     followRequest, unfollowRequest, users
                 }) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       portionSize={pagesInLine}
            />
            <Users followingInProgress={followingInProgress} followRequest={followRequest}
                   unfollowRequest={unfollowRequest} users={users}/>
        </div>
    )
}


export default UsersPage