import React from 'react'
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route exact path='' render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>} />
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost} changeNewTextPost={props.changeNewTextPost} />} />
                    <Route path='/messages' render={() =>
                        <Messages state={props.state.messagesPage} />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;