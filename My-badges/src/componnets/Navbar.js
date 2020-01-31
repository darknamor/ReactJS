import React from 'react';

import './styles/Navbar.css';
import left from '../images/logo.svg';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='container-fluid'>
          <Link className='Navbar__brand' to='/'>
            <img className='Navbar__brand-logo' src={left} alt='Logo' />
            <span className='font-weight-light'>Mi perfil en &nbsp;</span>
            <span className='font-weight-bold'>React</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
