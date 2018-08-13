import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/Home';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducers/data';
import data from '../schemas/index.js';


const initialState = {
    data: {
        //...data,
        entities: data.entities,
        categories: data.result.categories
    },
    search: []
}

const store = createStore(
    reducer,
    initialState,
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