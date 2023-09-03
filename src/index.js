import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AnimatedRoutes from './Componentes/AnimatedRoutes';
import { HashRouter } from 'react-router-dom'; 
//Ponemos HashRouter para que reinicie las rutas
//Instalamso npm i gh-pages --save-dev


// en elpackage agregamos esto para comvertir la apgina de react a estatica y poder subirla a githubpages
// - "homepage": "https://{Github Username}.github.io/{NombreRepo}"
// - "predeploy": "npm run build" //estos dos van en script
// - "deploy": "gh-pages -d build"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
