import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Body from './EditPage/Body';
import { useHistory, useLocation } from 'react-router-dom';

function DeployPage(props) {
  const { match: { params } } = props;
  const id = parseInt(params.id)

  let history = useHistory();
  let location = useLocation();
  
  let { from } = location.state || { from: { pathname: "/" } };
  let redirectAuth = () => {
      history.replace(from);
  };

  return(
      <div className='App'>
          <Header desc="Edit a Project"/>
          <Body redirectAction={redirectAuth} id={id}/>
          <Footer />
    </div>
  )
}


export default DeployPage;
