import React from 'react';
import Header from './Common/Header';
import Body from './Homepage/Body';
import Footer from './Common/Footer';

function Homepage() {
  return (
    <div className='App'>
      <Header desc="This site holds the collection of Steve Bezalel's self projects!"/>
      <Body />
      <Footer />
    </div>
  );
}

export default Homepage;
