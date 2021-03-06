import React from 'react';
import axios from 'axios'
import Project from '../Common/Project'
import { baseAPI, baseDomain } from '../../Datas/apiurl'

class Body extends React.Component {

    constructor() {
        super()

        this.state = {
            loading: true,
            projects: [],
        }
    }

    componentDidMount() {
        const apiurl = baseAPI + "/api/projects"
        axios.get(apiurl)
            .then(response => {
                const projects = []
                if(response.data){
                    for (const el of response.data) {
                        projects.push({
                            link: `${baseDomain}:${el["Port"]}`,
                            img: `${baseAPI}/api/${el["Img"]}`,
                            title: el["Name"],
                            desc: el["Desc"],
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
    

    render() {
        return( !this.state.loading && 
            <div className = 'projectContainer'>
                {
                    this.state.projects.map(
                        (project, idx) => <Project link={project.link} img={project.img} title={project.title} desc={project.desc} key={idx} /> 
                    )
                }
            </div>
        )
    }
}

export default Body;
