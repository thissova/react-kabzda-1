import React from "react";
import Users from "./Users";
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
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
        debugger
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
            <Users totalUsersCount={this.props.totalUsersCount}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        pagesInLine: state.usersPage.pagesInLine,
        multiplier: state.usersPage.multiplier,
        followingInProgress: state.usersPage.followingInProgress
    }
})




export default withAuthRedirect( connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setMultiplierBigger, setMultiplierSmaller, getUsers: getUsersThunkCreator, followRequest: followUserThunkCreator, unfollowRequest: unfollowUserThunkCreator
})(UsersContainer))