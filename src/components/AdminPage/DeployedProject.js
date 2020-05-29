import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faDownload } from '@fortawesome/free-solid-svg-icons'

class DeployedProject extends React.Component {
    
  padDesc(desc){
      if (desc.length > 100) {
          return desc.slice(0, 50) + '...'
      }
      else {
          return desc
      }
  }

  render() {
      return(
        <tr>
          <td>{this.props.port}</td>
          <td>{this.props.name}</td>
          <td>{this.padDesc(this.props.desc)}</td>
          <td>
            <a href="/edit">
              <FontAwesomeIcon icon={faEdit} size="lg"/>
            </a>
            <a href="/download">
              <FontAwesomeIcon icon={faDownload} size="lg"/>
            </a>
            <a href="/delete">
              <FontAwesomeIcon icon={faTrashAlt} size="lg"/>
            </a>
          </td>
        </tr>
      )
  }
}

export default DeployedProject