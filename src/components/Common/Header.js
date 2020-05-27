import React from 'react';
import headerTxt from '../Datas/headerTxt';
import {
    Link
  } from "react-router-dom";

class Header extends React.Component {
  render() {
      return(
          <div className="header-out">
            <div>
                <Link to="/">
                <img
                    src = {headerTxt.img}
                    alt = 'placeholder'
                    className = 'title-img'
                />
                </Link>
            </div>
            <div className='header'>
                <div className='header-title'><Link to="/">{headerTxt.title}</Link></div>
                <div className='header-desc'>{this.props.desc}</div>
            </div>
          </div>
      )
  }
}

export default Header;
