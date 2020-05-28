import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        passcode: '',
        errorMsg: '',
        redirect: false,
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({passcode: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();

      axios({
        method: 'POST',
        url: '/api/login',
        data: qs.stringify({
          passcode: this.state.passcode
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        withCredentials: true
      })
      .then((response) => {
        this.setState({
          errorMsg: '',
          redirect: true,
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
            <form onSubmit={this.handleSubmit} className="admin-form">
                <input name="passcode" type="password" value={this.state.passcode} onChange={this.handleChange} />
                <input type="submit" value=">>"/>
            </form>
            {this.state.errorMsg !== '' && 
              <div className="error-message">{this.state.errorMsg}</div>
            }
            {this.state.redirect && <Redirect to='/admin' />}
        </div>
      );
    }
}

export default LoginForm