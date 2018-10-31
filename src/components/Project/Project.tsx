import * as React from 'react';

import { IProject } from '../App/App';

export interface ProjectProps {
  project: IProject;
}
 
export interface ProjectState {
  
}
 
class Project extends React.Component<ProjectProps, ProjectState> {
  constructor(props: ProjectProps) {
    super(props);
    // this.state = { :  };
  }
  render() { 
    return ( <div>
      { this.props.project.name }
      { this.props.project.roles }
      { this.props.project.url }

      

    </div> );
  }
}
 
export default Project;