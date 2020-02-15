import React from "react";
import "./styles/Badges.css";

import BadgesList from "../components/BadgesList";
import left from "../images/astronauta.svg";
import right from "../images/ovni.svg";
import { Link } from "react-router-dom";

import api from "../api";
class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading === true) {
      return "Loading...";
    }
    if (this.state.error) {
      return `'Error: ${this.state.error.message}'`;
    }
    return (
      <React.Fragment>
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
            <Link to='/badges/new' className='btn btn-primary'>
              New Badge
            </Link>
          </div>
          <div className='BadgesList'>
            <div className='Badges__container'>
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Badges;
