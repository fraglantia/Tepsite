import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faDownload } from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class DeployedProject extends React.Component {
  
  constructor() {
      super()
      this.handleDownload = this.handleDownload.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.handleConfirmedDelete = this.handleConfirmedDelete.bind(this)
  }

  padDesc(desc){
      if (desc.length > 100) {
          return desc.slice(0, 50) + '...'
      }
      else {
          return desc
      }
  }

  handleDownload(event){
    event.preventDefault();
    // alert('downloaded '+this.props.id)
  }

  handleDelete(event){
    event.preventDefault();
    // alert('deleted '+this.props.id)
    confirmAlert({
      title: 'Confirm to Delete',
      message: `Are you sure you want to delete ${this.props.name}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.handleConfirmedDelete()
        },
        {
          label: 'No',
        }
      ]
    });
  }

  handleConfirmedDelete() {
    alert(`deleting id=${this.props.id}`)
  }

  render() {
      return(
        <tr>
          <td>{this.props.port}</td>
          <td>{this.props.name}</td>
          <td>{this.padDesc(this.props.desc)}</td>
          <td>
            <a href={"/edit/"+this.props.id}>
              <span>
                <FontAwesomeIcon icon={faEdit} size="lg"/>
              </span>
            </a>
            <span onClick={this.handleDownload}>
              <FontAwesomeIcon icon={faDownload} size="lg"/>
            </span>
            <span  onClick={this.handleDelete}>
              <FontAwesomeIcon icon={faTrashAlt} size="lg"/>
            </span>
          </td>
        </tr>
      )
  }
}

export default DeployedProject