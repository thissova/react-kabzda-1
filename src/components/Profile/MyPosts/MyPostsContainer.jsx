import { connect } from "react-redux";
import { addPostActionCreator} from "../../../data/profile-reducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (message) => {
            dispatch(addPostActionCreator(message))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer