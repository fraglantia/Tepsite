import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
      return(
          <div className='footer'>
                <div className='icons'>
                    <div className='icon'>
                        <a href='#'>
                            <FontAwesomeIcon icon={faInstagram} size='2x'/>
                        </a>
                    </div>
                    <p>•</p>
                    <div className='icon'>
                        <a href='#'>
                            <FontAwesomeIcon icon={faFacebook} size='2x'/>
                        </a>
                    </div>
                    <p>•</p>
                    <div className='icon'>
                        <a href='#'>
                            <FontAwesomeIcon icon={faTwitter} size='2x'/>
                        </a>
                    </div>
                    <p>•</p>
                    <div className='icon'>
                        <a href='#'>
                            <FontAwesomeIcon icon={faGithub} size='2x'/>
                        </a>
                    </div>
                </div>
                <div className='text'>
                    <p>sbig, 2019</p>
                </div>
          </div>
          
      )
  }
}

export default Footer;
