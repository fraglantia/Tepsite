import React from 'react';
import logo from '../../resources/psd.png';
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
                    src = {logo}
                    alt = 'placeholder'
                    className = 'title-img'
                />
                </Link>
            </div>
            <div className='header'>
                <div className='header-title'><Link to="/">stevebezalel.com</Link></div>
                <div className='header-desc'>{this.props.desc}</div>
            </div>
          </div>
      )
  }
}

export default Header;
