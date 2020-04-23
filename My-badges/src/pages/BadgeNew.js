import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/astronauta.svg";
import right from "../images/ovni.svg";
import Badge from "../components/Badje";

import BadgeForm from "../components/BadgeForm";
import api from "../api.js";
import md5 from "md5";
import PageLoading from "../components/PageLoading";
class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };
  handleChange = (e) => {
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
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      const hash = md5(this.state.form.email);
      const hashedGravatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
      this.state.form = {
        ...this.state.form,
        avatarUrl: hashedGravatar,
      };
      this.setState({ loading: false });
      await api.badges.create(this.state.form);
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
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
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                twitter={this.state.form.twitter || "TWITTER"}
                email={this.state.form.email || "EMAIL"}
                avatarURL='https://media-exp1.licdn.com/dms/image/C4E03AQFH1fmffAtRmg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=rpSMrqCho7u1DHCCD61pww60J7NTObn2KgnOwxnhqTE'
              ></Badge>
            </div>
            <div className='col-6'>
              <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeNew;
