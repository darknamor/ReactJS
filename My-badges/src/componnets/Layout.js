import React from 'react';

import Navbar from '../componnets/Navbar';
function Layout(props) {
  //const children = props.children;
  return (
      //React.fragment evita DIVS innecesarios
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}
export default Layout;
