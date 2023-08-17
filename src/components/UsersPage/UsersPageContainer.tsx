import React from "react";
import UsersPage from "./UsersPage";
import {connect} from "react-redux";
import {
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowUserThunkCreator, UserType
} from "../../data/users-reducer";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPagesInLine,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../data/users-selectors";
import Preloader from "../common/Preloader/Preloader";
import {AppStateType} from "../../data/redux-store";

type MapStateType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    pagesInLine: number
    followingInProgress: Array<number>
}
type MapDispatchType = {
    unfollowRequest: (userId: number) => void
    followRequest: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type PropsType = MapStateType & MapDispatchType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <UsersPage totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           users={this.props.users}
                           pagesInLine={this.props.pagesInLine}
                           followRequest={this.props.followRequest}
                           unfollowRequest={this.props.unfollowRequest}
                           followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        pagesInLine: getPagesInLine(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect<MapStateType, MapDispatchType, null, AppStateType>(mapStateToProps, {
        getUsers: getUsersThunkCreator,
        followRequest: followUserThunkCreator, unfollowRequest: unfollowUserThunkCreator
// @ts-ignore
    }))(UsersContainer)