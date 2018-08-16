import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/Home';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducers/index';
import thunk from 'redux-thunk'
import logger  from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Map as map} from 'immutable'


/*const initialState = {
    data: {
        //...data,
        entities: data.entities,
        categories: data.result.categories,
        search: []
    },
    modal:{
        visibility: false,
        mediaId: null,
    }
}*/

const logger1 = ({dispatch, getState}) => next => action =>{
    console.log(`estado anterior: `, getState().toJS())
    console.log(`enviando accion: `, action)
    const result = next(action)
    console.log(`nuevo estado: `, getState().toJS())
    return result;
} 
const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(logger, logger1, thunk)
    )
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container');

//ReactDOM.render(que voy a renderizar, donde lo voy ahcer)
//const holaMundo = <h1>hola mundo!!</h1>;


ReactDOM.hydrate(
    <Provider store={store}>
        <Home hola="k hace"/>
    </Provider>
    ,homeContainer);