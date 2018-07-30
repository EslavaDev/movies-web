import React from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media';
const app = document.getElementById('app');

//ReactDOM.render(que voy a renderizar, donde lo voy ahcer)
//const holaMundo = <h1>hola mundo!!</h1>;
ReactDOM.render(<Media type="video" title="¿Que es Responsive Design?" author="WolfyDev"/>,app);