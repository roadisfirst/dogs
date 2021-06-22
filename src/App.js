import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Content from './hoc/Content/Content';
import Home from './components/Home/Home';

import classes from './App.css';
import MainMenu from './containers/MainMenu/MainMenu';
import Breeds from './containers/Breeds/Breeds';
import SingleBreed from './containers/Breeds/SingleBreed/SingleBreed';

const App = () => {
  return (
      <div className={classes.App}>
        <Layout>
          <MainMenu />
          <Switch>
            <Route path="/pet-breeds" exact component={Breeds} />
            <Route path="/pet-breeds/:id" exact component={SingleBreed} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
  );
}

export default App;
