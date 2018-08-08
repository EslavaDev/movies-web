import React from 'react';
import ReactDOM from 'react-dom';
import data from '../api.json';
import Home from '../pages/containers/Home';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const homeContainer = document.getElementById('home-container');

//ReactDOM.render(que voy a renderizar, donde lo voy ahcer)
//const holaMundo = <h1>hola mundo!!</h1>;
ReactDOM.render(<Home data={data}/>,homeContainer);