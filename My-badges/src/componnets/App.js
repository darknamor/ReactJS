import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layaout from '../componnets/Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Layaout>
        <Switch>
          <Route exact path='/badges' component={Badges} />
          <Route exact path='/Badges/new' component={BadgeNew} />
          <Route component={NotFound}/>
        </Switch>
      </Layaout>
    </BrowserRouter>
  );
}
export default App;