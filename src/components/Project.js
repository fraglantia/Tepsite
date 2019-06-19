import React from 'react';
import placeholder from './Images/placeholder.jpg'

class Project extends React.Component {
  render() {
      return(
          <div className = 'projectDiv'>
                <img
                    src = {placeholder}
                    alt = 'placeholder'
                    className = 'projectImg'
                />

                <div className='projectTitle'>
                    <p>Project Name</p>
                </div>
              
                <div className='projectDesc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...
                </div>
          </div>
      )
  }
}

export default Project;
