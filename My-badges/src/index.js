import React from 'react'; //analogo a create element
import ReactDOM from 'react-dom'; //analogo a apend child
import Badge from './componnets/Badje';
import './global.css'
const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);
