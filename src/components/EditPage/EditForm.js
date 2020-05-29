import React from 'react';
import axios from 'axios'

class EditForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projectName: '',
        projectDesc: '',
        projectPort: '',
        errorMsg: ''
      };
  
      this.handleProjNameChange = this.handleProjNameChange.bind(this);
      this.handleProjDescChange = this.handleProjDescChange.bind(this);
      this.handleProjPortChange = this.handleProjPortChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleProjNameChange(event) {
      this.setState({projectName: event.target.value});
    }

    handleProjDescChange(event) {
      this.setState({projectDesc: event.target.value});
    }

    handleProjPortChange(event) {
      this.setState({projectPort: event.target.value});
    }

    componentDidMount () {
      // console.log(this.props.id)
      if(this.props.id===0){
        this.setState({
          projectName: 'Project Name 0',
          projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          projectPort: 10000,
        })
      }
      else if(this.props.id===1){
        this.setState({
          projectName: 'Project Name 1',
          projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          projectPort: 10001,
        })
      }
      else {
        this.setState({
          projectName: 'Project Name X',
          projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          projectPort: 10009,
        })
      }
    }


    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData() 
      data.append('projectName', this.state.projectName)
      data.append('projectDesc', this.state.projectDesc)
      data.append('projectPort', this.state.projectPort)
      
      axios({
        method: 'POST',
        url: '/api/editproject/' + this.props.id,
        data: data,
        withCredentials: true
      })
      .then((response) => {
        this.setState({
          errorMsg: '',
        })
      })
      .catch((error) => {
        if(error.response.status === 401){
          this.setState({errorMsg: error.response.data})
        } else {
          this.setState({errorMsg: "Internal Server Error"})
        }
      });
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit} className="deploy-form">
                <label>
                  <span>Name:</span>
                  <input type="text" className="input-field" name="projectName" value={this.state.projectName} onChange={this.handleProjNameChange} />
                </label>

                <label>
                  <span>Desc:</span>
                  <textarea rows="8" className="input-field" name="projectDesc" value={this.state.projectDesc} onChange={this.handleProjDescChange} />
                </label>

                <label>
                  <span>Port:</span>
                  <input type="number" className="input-field" name="projectPort" value={this.state.projectPort} onChange={this.handleProjPortChange} />
                </label>

                <label><span> </span><input type="submit" value="Save Changes" /></label>
            </form>
            <div className="error-container">
              {this.state.errorMsg !== '' && 
                <div className="error-message">{this.state.errorMsg}</div>
              }
            </div>
        </div>
      );
    }
}

export default EditForm