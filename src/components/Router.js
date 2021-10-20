import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const AppRouter = ({shoes}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home shoes={shoes}></Home>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes}></Detail>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
