import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layaout from '../components/Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Home from '../pages/Home';

import NotFound from '../pages/NotFound';
import BadgeEdit from '../pages/BadgeEdit';

function App() {
  return (
    <BrowserRouter>
      <Layaout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/badges' component={Badges} />
          <Route exact path='/Badges/new' component={BadgeNew} />
          <Route exact path='/Badges/:badgeId/edit' component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layaout>
    </BrowserRouter>
  );
}
export default App;
