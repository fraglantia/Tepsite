import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
    constructor() {
        super()
        this.state = {
            auth: false,
            authDone: false
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: '/api/checkAuth',
            withCredentials: true
          })
          .then((response) => {
            this.setState({
                auth: true,
                authDone: true
            })
          })
          .catch((error) => {
            this.setState({
                auth: false,
                authDone: true
            })
          }
        );
    }

    render() {
        const {component: Component, ...rest} = this.props;
        return (
            <Route {...rest} render={props => (
                this.state.authDone ?
                this.state.auth ? <Component {...props} /> : <Redirect to="/adminlogin" />
                : <div className="loading-message">Authenticating...</div>
            )} />
        );
    }
}

export default PrivateRoute;