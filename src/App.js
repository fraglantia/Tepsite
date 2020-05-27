import React from 'react';
import PrivateRoute from './components/Utility/PrivateRoute'
import Homepage from './components/Homepage';
import AdminLogin from './components/AdminLogin'
import AdminPage from './components/AdminPage'
import NotFoundPage from './components/NotFoundPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/adminlogin" exact component={AdminLogin}/>
        <PrivateRoute path="/admin" exact component={AdminPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;
