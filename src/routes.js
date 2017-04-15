import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//importing components
import AppContainer from './components/AppContainer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Links from './components/Links';

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/links" component={Links} />
      </Route>
    </Router>
  );
};

export default Root;
