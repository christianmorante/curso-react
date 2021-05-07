import React from "react";
import ReactDOM from 'react-dom';
import PrimeraApp from "./PrimeraApp";
import './index.css'


//const saludo = <h1>Hola Mundo</h1>

const divRoot = document.querySelector('#app');
//console.log(divRoot); saludo='Hola soy Chris'


ReactDOM.render( <PrimeraApp  />, divRoot);