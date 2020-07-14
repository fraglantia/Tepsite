import React from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import baseAPI from '../../Datas/apiurl'

class DeployedProject extends React.Component {
  
  constructor(props) {
      super(props)

      this.state = {
        visible: this.props.detail.visible
      }
      
      this.handleDelete = this.handleDelete.bind(this)
      this.handleConfirmedDelete = this.handleConfirmedDelete.bind(this)
      this.handleVisibility = this.handleVisibility.bind(this)
  }

  padDesc(desc){
      if (desc.length > 100) {
          return desc.slice(0, 50) + '...'
      }
      else {
          return desc
      }
  }

  handleDelete(event){
    event.preventDefault();
    confirmAlert({
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete ${this.props.detail.name}?`,
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

  handleVisibility(event){
    axios({
      method: 'GET',
      url: baseAPI + '/api/toggleVisible/' + this.props.detail.id,
      withCredentials: true
    })
    .then((response) => {
      this.setState({
        visible: !this.state.visible
      })
    })
  }

  handleConfirmedDelete() {
    axios({
      method: 'POST',
      url: baseAPI + '/api/deleteProject/' + this.props.detail.id,
      withCredentials: true
    })
    .then((response) => {
      this.props.redirectAction()
    })
  }

  render() {
      return(
        <tr>
          <td>{this.props.detail.port}</td>
          <td>{this.props.detail.name}</td>
          <td>{this.padDesc(this.props.detail.desc)}</td>
          <td>
            <a href={"/edit/"+this.props.detail.id}>
              <div>
                <FontAwesomeIcon icon={faEdit} size="lg"/>
              </div>
            </a>
            <div  onClick={this.handleDelete}>
              <FontAwesomeIcon icon={faTrashAlt} size="lg"/>
            </div>
            <div  onClick={this.handleVisibility}>
              <FontAwesomeIcon icon={this.state.visible ? faEye : faEyeSlash} size="lg"/>
            </div>
          </td>
        </tr>
      )
  }
}

export default DeployedProject