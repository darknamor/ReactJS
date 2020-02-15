import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/astronauta.svg';
import right from '../images/ovni.svg';
import Badge from '../components/Badje';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  };
  handleChange = e => {
    //primera forma de mantener valores de las variables en el form
    /* const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;
    this.setState({
      form: nextForm
    }); */
    //segunda forma de mantener valores del form
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className='BadgeNew__hero'>
          <img className='img-fluid' title='img1' width='90px' src={header} alt='Logo'></img>
          <img className='img-fluid right' width='90px' src={right} alt='Logo'></img>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              {/* firstName='Nicolás'
                lastName='Miranda'
                avatarURL='https://media-exp1.licdn.com/dms/image/C4E03AQFH1fmffAtRmg/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=GVj3TCsS2cl7xgwA89QTcdB2HXGgyetVFWWnTeg_bug'
                jobTitle='Full Stack Development'
                twitter='@darknamor' */}
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatarURL='https://media-exp1.licdn.com/dms/image/C4E03AQFH1fmffAtRmg/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=GVj3TCsS2cl7xgwA89QTcdB2HXGgyetVFWWnTeg_bug'></Badge>
            </div>
            <div className='col-6'>
              <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeNew;
