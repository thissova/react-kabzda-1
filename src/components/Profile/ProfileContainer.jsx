import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    setStatusThunkCreator,
    setUserProfile
} from "../../data/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        setStatus={this.props.setStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id,
    isAuth: state.auth.isAuth
})


export default compose(connect(mapStateToProps, {
        setUserProfile,
        getUserProfile: getUserProfileThunkCreator,
        setStatus: setStatusThunkCreator,
        getStatus: getStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)