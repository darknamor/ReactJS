import React from 'react'; //analogo a create element
import ReactDOM from 'react-dom'; //analogo a apend child


import App from './components/App';

import './global.css';
import 'bootstrap/dist/css/bootstrap.css';
const container = document.getElementById('app');

ReactDOM.render(<App />, container);
