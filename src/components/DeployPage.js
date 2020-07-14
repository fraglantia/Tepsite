import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Body from './DeployPage/Body';
import { useHistory, useLocation } from 'react-router-dom';

function DeployPage () {
  let history = useHistory();
  let location = useLocation();
  
  let { from } = location.state || { from: { pathname: "/" } };
  let redirectAuth = () => {
      history.replace(from);
  };

  return(
    <div className='App'>
        <Header desc="Add a Project"/>
        <Body redirectAction={redirectAuth} />
        <Footer />
  </div>
  )
}

export default DeployPage;
