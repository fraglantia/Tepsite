import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Body from './AdminLogin/Body';

class AdminLogin extends React.Component {

  render() {
      return(
        <div className='App'>
            <Header desc="Admin Login"/>
            <Body />
            <Footer />
      </div>
      )
  }
}

export default AdminLogin;
 