import React from 'react';

class DeployForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projectName: '',
        projectDesc: '',
        projectPort: '',
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
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit} className="admin-form">
                <input name="projectName" type="text" value={this.state.projectName} onChange={this.handleProjNameChange} />
                <input name="projectDesc" type="text" value={this.state.projectDesc} onChange={this.handleProjDescChange} />
                <input name="projectPort" type="number" value={this.state.projectPort} onChange={this.handleProjPortChange} />
                <input type="submit" value=">>"/>
            </form>
        </div>
      );
    }
}

export default DeployForm