import React from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Body from './NotFoundPage/Body';

function NotFoundPage() {
  return (
    <div className='App'>
      <Header desc="Page Not Found"/>
      <Body />
      <Footer />
    </div>
  );
}

export default NotFoundPage;
