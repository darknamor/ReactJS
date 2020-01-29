import React from 'react';
import './styles/Badges.css';

import Navbar from '../componnets/Navbar';
import BadgesList from '../componnets/BadgesList';
import left from '../images/astronauta.svg';
import right from '../images/ovni.svg';
import avatar1 from '../images/avatar1.svg';
import avatar2 from '../images/avatar2.svg';
import avatar3 from '../images/avatar3.svg';
class Badges extends React.Component {
  state = {
    data: [
      {
        id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
        firstName: 'Freda',
        lastName: 'Grady',
        email: 'Leann_Berge@gmail.com',
        jobTitle: 'Legacy Brand Director',
        twitter: 'FredaGrady22221-7573',
        avatarUrl: avatar1
      },
      {
        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
        firstName: 'Major',
        lastName: 'Rodriguez',
        email: 'Ilene66@hotmail.com',
        jobTitle: 'Human Research Architect',
        twitter: 'MajorRodriguez61545',
        avatarUrl: avatar2
      },
      {
        id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
        firstName: 'Daphney',
        lastName: 'Torphy',
        email: 'Ron61@hotmail.com',
        jobTitle: 'National Markets Officer',
        twitter: 'DaphneyTorphy96105',
        avatarUrl: avatar3
      }
    ]
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className='Badges'>
          <div className='Badges__hero'>
            <div className='Badges__container'>
              <img title='img1' className='Badges_conf-logo' width='80px' src={left} alt=''></img>
              <img title='img2' className='Badges_conf-logo' width='80px' src={right} alt=''></img>
            </div>
          </div>
        </div>
        <div className='Badges__container'>
          <div className='Badges__buttons'>
            <a href='/badges/new' className='btn btn-primary'>
              New Badge
            </a>
          </div>
          <div className='BadgesList'>
            <div className='Badges__container'>
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Badges;
