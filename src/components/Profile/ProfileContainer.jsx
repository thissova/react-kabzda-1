import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator, setPhotoThunkCreator,
    setStatusThunkCreator,
    setUserProfile
} from "../../data/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push("/login");
            } else {
                this.props.getUserProfile(userId);
                this.props.getStatus(userId);
            }
        } else {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }
    }

    componentDidMount() {

        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        // console.log("RENDER PROFILE");
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} setStatus={this.props.setStatus}
                     isOwner={!this.props.match.params.userId}
                     setPhoto={this.props.setPhoto}
            />
        )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.id,
        isAuth: state.auth.isAuth

    }
)

export default compose(connect(mapStateToProps, {
        setUserProfile,
        getUserProfile: getUserProfileThunkCreator,
        setStatus: setStatusThunkCreator,
        getStatus: getStatusThunkCreator,
        setPhoto: setPhotoThunkCreator
    }),
    withRouter,
)(ProfileContainer)