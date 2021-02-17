import React from 'react';
import { Route, Router } from 'react-router-dom';

import './App.css';
import Header from './modules/App/components/Header/Header';
import Login from './modules/Login/components/Login';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

export default App;
