import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt='Logo'></img>
        </div>
        <div>
          <img src='' alt='Avatar'></img>
          <h1>
            Nicolás <br /> Miranda
          </h1>
        </div>
        <div>
          <p>Full Stack Enginerr</p>
          <p>@darknamor</p>
        </div>
      </div>
    );
  }
}
export default Badge;
