import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Body from './AdminPage/Body';


class AdminPage extends React.Component {
  render() {
      return(
        <div className='App'>
            <Header desc="List of Deployed Projects"/>
            <Body history={this.props.history}/>
            <Footer />
      </div>
      )
  }
}

export default AdminPage;
