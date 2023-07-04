import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, setMultiplierBigger, setMultiplierSmaller } from "../../data/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.setIsFetching(false)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true) 
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items);
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