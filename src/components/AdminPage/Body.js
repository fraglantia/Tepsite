import React from 'react';
import DeployedProject from './DeployedProject'

class Body extends React.Component {

    constructor() {
        super()

        this.state = {
            loading: true,
            projects: null,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        // axios.get(apiurl)
        //     .then(response => {
        //         this.setState(
        //             {
        //                 loading: false,
        //                 projects: response.data
        //             })
        //     })

        const placeholder_projects = []

        const placeholder_item_0 = {
            id: 0,
            name: 'Project Name 0',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            port: 10000,
        }

        const placeholder_item_1 = {
            id: 1,
            name: 'Project Name 1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            port: 10001,
        }

        placeholder_projects.push(placeholder_item_0)
        placeholder_projects.push(placeholder_item_1)

        this.setState ({
            loading: false,
            projects: placeholder_projects,
        })
        
      }

    handleClick(){
        this.props.history.push('/deploy')
    }

    render() {
        return(
            !this.state.loading && 
            <div className='deployment'>
                <table className = 'deployment-table'>
                    <thead>
                        <tr>
                            <th>Port</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.projects.map(
                                (project, idx) => <DeployedProject name={project.name} port={project.port} desc={project.desc} key={idx} id={project.id} /> 
                            )
                    }
                    </tbody>
                </table>
                <button onClick={this.handleClick}>Deploy a  New Project >></button>
            </div>
        )
    }
}

export default Body;
