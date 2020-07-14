import React from 'react'
import axios from 'axios'
import Project from '../Common/Project'
import placeholder_img from '../../Datas/Images/placeholder.jpg'
import baseAPI from '../../Datas/apiurl'

class EditForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projectName: '',
        projectDesc: '',
        projectPort: '',
        projectImg: null,
        previewImg: placeholder_img,
        errorMsg: ''
      };
  
      this.handleProjNameChange = this.handleProjNameChange.bind(this);
      this.handleProjDescChange = this.handleProjDescChange.bind(this);
      this.handleProjPortChange = this.handleProjPortChange.bind(this);
      this.handleProjImgChange = this.handleProjImgChange.bind(this);
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

    handleProjImgChange(event) {
      this.setState({
        projectImg: event.target.files[0],
        previewImg: URL.createObjectURL(event.target.files[0]),
      })
    }

    componentDidMount () {
      axios({
        method: 'GET',
        url: baseAPI + '/api/adminProjects/' + this.props.id,
        withCredentials: true
      })
      .then((response) => {
        this.setState({
          projectName: response.data["Name"],
          projectDesc: response.data["Desc"],
          projectPort: response.data["Port"],
          previewImg: baseAPI + "/api/" + response.data["Img"],
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


    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData() 
      data.append('projectName', this.state.projectName)
      data.append('projectDesc', this.state.projectDesc)
      data.append('projectPort', this.state.projectPort)
      data.append('projectImg', this.state.projectImg)
      
      axios({
        method: 'POST',
        url: '/api/editProject/' + this.props.id,
        data: data,
      })
      .then((response) => {
        this.setState({
          errorMsg: '',
        })
        this.props.redirectAction()
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
        <div className="deploy-form-container">
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
                  <span>Thumbnail:</span>
                  <div className="upload-btn-wrapper">
                    <button className="btn">Upload a file</button>
                    <input type="file" className="input-field-file" name="projectImg" onChange={this.handleProjImgChange} />
                  </div>
                </label>

                <label><span> </span><input type="submit" value="Save Changes" /></label>
            </form>
            <div className="error-container">
              {this.state.errorMsg !== '' && 
                <div className="error-message">{this.state.errorMsg}</div>
              }
            </div>
            <div>
              <Project 
                link="#"
                img={this.state.previewImg}
                title={this.state.projectName!=="" ? this.state.projectName : "Project Title"}
                desc={this.state.projectDesc!=="" ? this.state.projectDesc : "Project Description"}
              />
            </div>
        </div>
      );
    }
}

export default EditForm