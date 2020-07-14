import React from 'react';

class Project extends React.Component {
    
    padDesc(desc){
        if (desc.length > 100) {
            return desc.slice(0, 100) + '...'
        }
        else {
            return desc
        }
    }

    render() {
        return(
            <div className='projectDiv'>
                <a href={this.props.link}>
                    <div>
                        <img
                            src = {this.props.img}
                            alt = 'placeholder'
                            className = 'projectImg'
                        />

                        <div className='projectTitle'>
                            <p>{this.props.title}</p>
                        </div>
                    
                        <div className='projectDesc'>
                            {this.padDesc(this.props.desc)}
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default Project;
