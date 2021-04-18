import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from '../components/RepositoriesList';
import Header from '../components/Header';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Steps from './Steps';
import Home from './Home';

const App = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/steps' component={Steps}></Route>
    </Switch>
  );
};

export default App;
