import React, {Suspense} from 'react'
import './App.scss';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
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

    catchAllUnhandedErrors = (promiseRejectionEvent) => {
        alert(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initialize()
        window.addEventListener("unhandledrejection", this.catchAllUnhandedErrors );
    }

    componentWillUnmount() {
        this.props.initialize()
        window.removeEventListener("unhandledrejection", this.catchAllUnhandedErrors );
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/messages' render={() => <MessagesContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
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
    return <BrowserRouter basename={""}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp