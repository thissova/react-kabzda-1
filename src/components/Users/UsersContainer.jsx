import axios from "axios";
import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, setMultiplierBigger, setMultiplierSmaller } from "../../data/users-reducer";
import Preloader from "../common/Preloader/Preloader";
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials:true}).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setIsFetching(false)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true) 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials:true}).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items);
        })
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
        multiplier: state.usersPage.multiplier
    }
})




export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, setMultiplierBigger, setMultiplierSmaller
})(UsersContainer)