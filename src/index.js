import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [
  { likesCount: 1, message: 'Good morning' },
  { likesCount: 73, message: "It's my first post" }      
]

let dialogs = [
  { id: '1', name: "Semen" },
  { id: '2', name: "Borya" },
  { id: '3', name: "Andrew" },

]

let messages =[
  {id: 1 ,message: 'Hi'},
  {id: 2 ,message: 'Hi'},
  {id: 3 ,message: 'How are you?'},
  {id: 4 ,message: "I'm good and you"},
  {id: 5 ,message: 'I\'m too'},
]

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
