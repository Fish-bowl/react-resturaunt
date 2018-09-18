import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Menu from './components/Menu'

const App = () => (
  <Fragment> 
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route component={NoMatch} />
      <Menu />
    </Switch>
  </Fragment> 
);

export default App;
