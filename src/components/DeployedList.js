import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Body from './DeployedList/Body';


class DeployedList extends React.Component {
  render() {
      return(
        <div className='App'>
            <Header desc="List of Deployed Projects"/>
            <Body />
            <Footer />
      </div>
      )
  }
}

export default DeployedList;
