import React from 'react';
import EditForm from './EditForm'

class Body extends React.Component {

    render() {
        return(
            <div>
                <EditForm redirectAction={this.props.redirectAction} id={this.props.id} />
            </div>
        )
    }
}

export default Body;
