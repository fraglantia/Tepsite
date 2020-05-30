import React from 'react';
import axios from 'axios'

class DeployForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projectName: '',
        projectDesc: '',
        projectPort: '',
        projectFile: null,
        errorMsg: ''
      };
  
      this.handleProjNameChange = this.handleProjNameChange.bind(this);
      this.handleProjDescChange = this.handleProjDescChange.bind(this);
      this.handleProjPortChange = this.handleProjPortChange.bind(this);
      this.handleProjFileChange = this.handleProjFileChange.bind(this);
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

    handleProjFileChange(event) {
      this.setState({projectFile: event.target.files[0]})
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData() 
      data.append('projectFile', this.state.projectFile)
      data.append('projectName', this.state.projectName)
      data.append('projectDesc', this.state.projectDesc)
      data.append('projectPort', this.state.projectPort)
      
      axios({
        method: 'POST',
        url: '/api/addproject',
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

                <label>
                  <span>File:</span>
                  <div className="upload-btn-wrapper">
                    <button className="btn">Upload a file</button>
                    <input type="file" className="input-field-file" name="projectFile" onChange={this.handleProjFileChange} />
                  </div>
                </label>

                <label><span> </span><input type="submit" value="Deploy" /></label>
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

export default DeployForm