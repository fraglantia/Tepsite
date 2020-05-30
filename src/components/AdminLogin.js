import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Body from './AdminLogin/Body';
import { useHistory, useLocation } from 'react-router-dom';


function AdminLogin () {

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/admin" } };
  let redirectAuth = () => {
      history.replace(from);
  };
  
  return(
      <div className='App'>
          <Header desc="Admin Login"/>
          <Body redirectAction={redirectAuth}/>
          <Footer />
    </div>
  )
}

export default AdminLogin;
 