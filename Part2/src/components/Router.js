import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import Navigation from './Navigation';

const AppRouter = ({shoes, setShoes}) => {
  return (
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <Home shoes={shoes} setShoes={setShoes}></Home>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes}></Detail>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
