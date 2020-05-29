import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Body from './EditPage/Body';

class DeployPage extends React.Component {
  
  constructor(props) {
    super(props);
    const { match: { params } } = this.props;
    this.state = {id:parseInt(params.id)}
  }

  render() {
      return(
        <div className='App'>
            <Header desc="Add a Project"/>
            <Body id={this.state.id}/>
            <Footer />
      </div>
      )
  }
}

export default DeployPage;
