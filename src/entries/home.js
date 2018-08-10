import React from 'react';
import ReactDOM from 'react-dom';
import data from '../api.json';
import Home from '../pages/containers/Home';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducers/data';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container');

//ReactDOM.render(que voy a renderizar, donde lo voy ahcer)
//const holaMundo = <h1>hola mundo!!</h1>;


ReactDOM.hydrate(
    <Provider store={store}>
        <Home hola="k hace"/>
    </Provider>
    ,homeContainer);