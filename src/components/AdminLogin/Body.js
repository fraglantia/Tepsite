import React from 'react';
import LoginForm from './LoginForm'

class Body extends React.Component {

    render() {
        return(
            <div className="login-body">
                <p>Enter your passcode:</p>
                <LoginForm redirectAction={this.props.redirectAction}/>
            </div>
        )
    }
}

export default Body;
