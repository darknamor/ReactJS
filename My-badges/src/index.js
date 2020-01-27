import React from 'react'; //analogo a create element
import ReactDOM from 'react-dom'; //analogo a apend child

const container = document.getElementById('app');

const element = <h1>Hello, My Badges</h1>;
ReactDOM.render(element, container);
