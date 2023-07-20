import React, {Suspense} from 'react'
import './App.scss';
import {HashRouter, Route, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import {connect, Provider} from "react-redux";
import {initializeApp} from "./data/app-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./data/redux-store";
import MessagesContainer from "./components/Messages/MessagesContainer";


const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./components/UsersPage/UsersContainer"))
const Login = React.lazy(() => import("./components/Login/Login"))

class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Route exact path='/' render={() => <ProfileContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/messages' render={() => <MessagesContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initialize: initializeApp})
)(App);

const MainApp = () => {
    return <HashRouter basename={""}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default MainApp