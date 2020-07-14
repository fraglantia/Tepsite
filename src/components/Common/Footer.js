import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import links from '../../Datas/links';

class Footer extends React.Component {
  render() {
      return(
          <div className='footer'>
                <div className='icons'>
                    <div className='icon'>
                        <a href={links.instagram}>
                            <FontAwesomeIcon icon={faInstagram} size='2x'/>
                        </a>
                    </div>
                    <p>•</p>
                    <div className='icon'>
                        <a href={links.facebook}>
                            <FontAwesomeIcon icon={faFacebook} size='2x'/>
                        </a>
                    </div>
                    <p>•</p>
                    <div className='icon'>
                        <a href={links.twitter}>
                            <FontAwesomeIcon icon={faTwitter} size='2x'/>
                        </a>
                    </div>
                    <p>•</p>
                    <div className='icon'>
                        <a href={links.github}>
                            <FontAwesomeIcon icon={faGithub} size='2x'/>
                        </a>
                    </div>
                </div>
                <div className='text'>
                    <p>sbig, 2020</p>
                </div>
          </div>
          
      )
  }
}

export default Footer;
