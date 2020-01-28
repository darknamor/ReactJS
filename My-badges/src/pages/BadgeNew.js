import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/astronauta.svg';
import Navbar from '../componnets/Navbar';
import Badge from '../componnets/Badje';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' width="90px" src={header} alt='Logo'></img>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Badge
                firstName='Nicolás'
                lastName='Miranda'
                avatarURL='https://es.gravatar.com/userimage/28968053/02e629a3077930841ed5341e32666afe?size=200'
                jobTitle='Full Stack Development'
                twitter='@darknamor'></Badge>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
