import React from 'react';

import './styles/Navbar.css';
import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='container-fluid'>
          <a className='Navbar__brand' href='/'>
            <img className='Navbar__brand-logo' src={logo} alt='Logo' />
            <span className='font-weight-light'>Mi perfil en &nbsp;</span>
            <span className='font-weight-bold'>React</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
