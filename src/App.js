import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';

import classes from './App.css';
import MainMenu from './containers/MainMenu/MainMenu';
import Breeds from './containers/Breeds/Breeds';

const App = () => {
  return (
      <div className={classes.App}>
        <Layout>
          <MainMenu />
          <Switch>
            <Route path="/pet-breeds" exact component={Breeds} />
            <Route path="/" component={Home} />
          </Switch>
          </Layout>
      </div>
  );
}

export default App;
