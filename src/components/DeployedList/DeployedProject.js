import React from 'react';

class DeployedProject extends React.Component {
    
  padDesc(desc){
      if (desc.length > 100) {
          return desc.slice(0, 50) + '...'
      }
      else {
          return desc
      }
  }

  render() {
      return(
        <tr>
          <td>{this.props.port}</td>
          <td>{this.props.name}</td>
          <td>{this.padDesc(this.props.desc)}</td>
          <td>X E D</td>
        </tr>
      )
  }
}

export default DeployedProject