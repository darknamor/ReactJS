import React from 'react'; //analogo a create element
import ReactDOM from 'react-dom'; //analogo a apend child

const jsx = (
  <div>
    <h1>Hola, soy Nicolas Miranda</h1>
    <p>Soy ingeniero full stack.</p>
  </div>
);
//const element = React.createElement('h1',{},'Hola! soy los children');
const container = document.getElementById('app');

ReactDOM.render(jsx, container);
