import React from 'react';
import './styles/NotFound.css';
import notFoundImg from '../images/astronaut.svg';
function NotFound() {
  return (
    <React.Fragment>
      <div className='NotFound__star'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={notFoundImg} alt='Astronauts' className='img-fluid p-4' />
            </div>
            <div className='NotFound__col  col-md-8'>
              <h1>404: Not Found</h1>
              <h3>THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST.YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE MOVED.</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default NotFound;
