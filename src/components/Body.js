import React from 'react';
import Project from './Project'
import placeholder_img from './Images/placeholder.jpg'

class Body extends React.Component {

    constructor() {
        super()

        const placeholder_projects = []

        const placeholder_item = {
            link: '#',
            img: placeholder_img,
            title: 'Project Name',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
        }

        for (let i = 0; i < 5; i++) { 
            placeholder_projects.push(placeholder_item)
        }

        this.state = {
            projects: placeholder_projects,
        }
    }

    // componentDidMount() {
    //     const url = '<sample_url>'
    //     fetch(url)
    //             .then(response => response.json())
    //             .then(response => {
    //                 this.setState({projects: response})
    //                 }
    //             )
    //   }
    

    render() {
        return(
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
