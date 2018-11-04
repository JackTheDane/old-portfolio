import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.scss';

import { IProject } from '../App/App';

export interface ProjectsProps {
  projects: IProject[];
}
 
export interface ProjectsState {
  
}


 
class Projects extends React.Component<ProjectsProps, ProjectsState> {
  render() { 
    return (
      <div>

        <h2>
          Projekter
        </h2>
        
        <div className="columns">

          {this.getProjectCards()}        

        </div>
      </div>
    );
  }

  private getProjectCards() {
    return this.props.projects.map( 

      (project, i: number) => <div key={'proj_' + i} className={`column col-6 col-xs-12 ${styles['projects__column']}`}>

        <div className="card">
          <div className="card-image">
            <img src={project.images[0]} className="img-responsive" />
          </div>

          <div className="card-header">
            <div className="card-title h5"> {project.name} </div>
            <div className="card-subtitle text-gray"> {project.roles} </div>
          </div>

          <div className="card-footer">
            <div className="btn-group btn-group-block">
              <Link to={'/projekter/' + project.urlName} className="btn btn-primary"> Vis projekt </Link>

              { project.url != null 
                ? <a href={project.url} target='_blank' rel='noopener' className="btn"> 
                  Besøg side 
                  <i className="icon mx-2 icon-link"></i> 
                </a> : '' }
              
            </div>
          </div>
        </div>

      </div>
    );
  }

}
 
export default Projects;