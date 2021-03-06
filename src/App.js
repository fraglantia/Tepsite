import React from 'react';
import PrivateRoute from './components/Utility/PrivateRoute'
import Homepage from './components/Homepage';
import AdminLogin from './components/AdminLogin'
import DeployPage from './components/DeployPage'
import AdminPage from './components/AdminPage'
import EditPage from './components/EditPage'
import NotFoundPage from './components/NotFoundPage';
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './stylesheet/style.css';

const history = createBrowserHistory();

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/adminlogin" exact component={AdminLogin}/>
        <PrivateRoute path="/deploy" exact component={DeployPage} history={history}/>
        <PrivateRoute path="/admin" exact component={AdminPage} history={history}/>
        <PrivateRoute path="/edit/:id" exact component={EditPage} history={history}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;
