import React from 'react'; //analogo a create element
import ReactDOM from 'react-dom'; //analogo a apend child
import Badge from './componnets/Badje';
import './global.css';
const container = document.getElementById('app');

ReactDOM.render(
  <Badge
    firstName='Nicolás'
    lastName='Miranda'
    avatarURL='https://es.gravatar.com/userimage/28968053/02e629a3077930841ed5341e32666afe?size=200'
    jobTitle='Full Stack Development'
    twitter='@darknamor'
  />,
  container
);
