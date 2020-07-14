import React from 'react'
import axios from 'axios'
import DeployedProject from './DeployedProject'
import baseAPI from '../../Datas/apiurl'

class Body extends React.Component {

    constructor() {
        super()

        this.state = {
            loading: true,
            projects: null,
        }

        this.handleClick = this.handleClick.bind(this)
        this.redirectAction = this.redirectAction.bind(this)
    }

    componentDidMount() {
        const apiurl = baseAPI + "/api/adminProjects"
        axios.get(apiurl)
            .then(response => {
                const projects = []
                if(response.data){
                    for (const el of response.data) {
                        projects.push({
                            id: el["ID"],
                            name: el["Name"],
                            desc: el["Desc"],
                            port: el["Port"],
                            visible: el["Visibility"],
                        })
                    }
                }
                this.setState(
                    {
                        loading: false,
                        projects: projects
                    })
            })        
      }

    handleClick(){
        this.props.history.push('/deploy')
    }

    redirectAction(){
        this.props.history.push('/')
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
                                (project, idx) => <DeployedProject detail={project} key={idx} redirectAction={this.redirectAction} /> 
                            )
                    }
                    </tbody>
                </table>
                <button onClick={this.handleClick}>{"Deploy a  New Project >>"}</button>
            </div>
        )
    }
}

export default Body;
