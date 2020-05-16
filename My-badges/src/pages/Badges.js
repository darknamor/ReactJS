import React from 'react';
import './styles/Badges.css';

import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import left from '../images/astronauta.svg';

import right from '../images/ovni.svg';
import { Link } from 'react-router-dom';
import MiniLoader from '../components/MiniLoader';
import api from '../api';
class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };
  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
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
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      //return `'Error: ${this.state.error.message}'`;
      return <PageError error={this.state.error} />;
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
              {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Badges;
