import React, {Suspense} from 'react'
import './App.scss';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
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


const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"))
const UsersContainer = React.lazy(() => import("./components/UsersPage/UsersContainer"))
const Login = React.lazy(() => import("./components/Login/Login"))

class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader/></div>}>
                            <Route exact path='react-kabzda-1/' render={() => <ProfileContainer/>}/>
                            <Route path='react-kabzda-1/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='react-kabzda-1/messages' render={() =>
                                <MessagesContainer/>}/>
                            <Route path='react-kabzda-1/users' render={() => <UsersContainer/>}/>
                            <Route path='react-kabzda-1/login' render={() => <Login/>}/>
                            <Route path='react-kabzda-1/news' component={News}/>
                            <Route path='react-kabzda-1/music' component={Music}/>
                            <Route path='react-kabzda-1/settings' component={Settings}/>
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
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp