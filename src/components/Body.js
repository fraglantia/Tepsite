import React from 'react';
import Project from './Project'

class Body extends React.Component {
  render() {
      return(
          <div className = 'projectContainer'>
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
          </div>
      )
  }
}

export default Body;
