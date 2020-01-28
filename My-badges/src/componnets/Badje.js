import React from 'react';
import './Styles/Badge.css';
import img1 from '../images/idea.svg';
import img2 from '../images/coding.svg';
import img3 from '../images/product.svg';
import 'bootstrap/dist/css/bootstrap.css';
class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={img1} alt='Logo'></img>
          <img src={img2} alt='Logo'></img>
          <img src={img3} alt='Logo'></img>
        </div>
        <div className='Badge__section-name'>
          <img className='Badge__avatar' src={this.props.avatarURL} alt='Avatar'></img>
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className='Badge__section-info'>
          <h3>Full Stack Development</h3>
          <div>@darknamor</div>
        </div>
        <div className='Badge__footer'>#React</div>
      </div>
    );
  }
}
export default Badge;
