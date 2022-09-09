import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './data/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App 
            state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
