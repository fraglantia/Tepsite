import React from 'react';
import DeployForm from './DeployForm'

class Body extends React.Component {

    render() {
        return(
            <div>
                <DeployForm redirectAction={this.props.redirectAction}/>
            </div>
        )
    }
}

export default Body;
