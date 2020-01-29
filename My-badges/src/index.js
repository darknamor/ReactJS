import React from 'react'; //analogo a create element
import ReactDOM from 'react-dom'; //analogo a apend child
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import './global.css';
import 'bootstrap/dist/css/bootstrap.css';
const container = document.getElementById('app');

ReactDOM.render(<Badges />, container);
