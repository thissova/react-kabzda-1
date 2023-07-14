import React from "react";
import UsersPage from "./UsersPage";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setMultiplierBigger,
    setMultiplierSmaller,
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowUserThunkCreator
} from "../../data/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching, getMultiplier,
    getPagesInLine,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../data/users-selectors";
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    followRequest = (userId) => {
        this.props.followRequest(userId)
    }
    unfollowRequest = (userId) => {
        this.props.unfollowRequest(userId)
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <UsersPage totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       pagesInLine={this.props.pagesInLine}
                       multiplier={this.props.multiplier}
                       setMultiplierBigger={this.props.setMultiplierBigger}
                       setMultiplierSmaller={this.props.setMultiplierSmaller}
                       followRequest={this.followRequest}
                       unfollowRequest={this.unfollowRequest}
                       followingInProgress={this.props.followingInProgress}
            />
        </>
        )
    }
}
let mapStateToProps = (state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        pagesInLine: getPagesInLine(state),
        multiplier: getMultiplier(state),
        followingInProgress: getFollowingInProgress(state),
    }
})

export default compose(
    connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setMultiplierBigger, setMultiplierSmaller, getUsers: getUsersThunkCreator,
        followRequest: followUserThunkCreator, unfollowRequest: unfollowUserThunkCreator
}))(UsersContainer)