import React from 'react';
import headerTxt from './Datas/headerTxt';

class Header extends React.Component {
  render() {
      return(
          <div className="header-out">
            <div>
                <img
                    src = {headerTxt.img}
                    alt = 'placeholder'
                    className = 'title-img'
                />
            </div>
            <div className='header'>
                <div className='header-title'>{headerTxt.title}</div>
                <div className='header-desc'>{headerTxt.desc}</div>
            </div>
          </div>
      )
  }
}

export default Header;