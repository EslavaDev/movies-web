import React from 'react';
import ReactDOM from 'react-dom';
import data from './src/api.json';
import Playlist from './src/playlist/components/playlist';
const app = document.getElementById('app');

//ReactDOM.render(que voy a renderizar, donde lo voy ahcer)
//const holaMundo = <h1>hola mundo!!</h1>;
ReactDOM.render(<Playlist data={data}/>,app);