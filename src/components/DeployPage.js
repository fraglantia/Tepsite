import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Body from './DeployPage/Body';


class DeployPage extends React.Component {
  render() {
      return(
        <div className='App'>
            <Header desc="Add a Project"/>
            <Body />
            <Footer />
      </div>
      )
  }
}

export default DeployPage;
