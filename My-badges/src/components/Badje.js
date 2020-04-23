import React from "react";

import "./styles/Badge.css";
import img1 from "../images/idea.svg";
import img2 from "../images/coding.svg";
import img3 from "../images/product.svg";

import "bootstrap/dist/css/bootstrap.css";
import Gravatar from "./Gravatar.js";

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
          <Gravatar className='Badge__avatar' email={this.props.email} alt='Avatar' />
        </div>
        <div className='Badge__section-info'>
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className='Badge__footer'>#React</div>
      </div>
    );
  }
}
export default Badge;
