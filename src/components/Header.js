import React from 'react';

class Header extends React.Component {
  render() {
      return(
          <div className='header'>
              <div className='header-title'>sitename.com</div>
              <div className='header-desc'>This website holds the collection of user's projects!</div>
          </div>
      )
  }
}

export default Header;
