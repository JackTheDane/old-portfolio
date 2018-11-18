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
      <div className={`content-page`}>

        <h1 className="transition-elem delay-0 text-primary">
          Udvalgte Projekter
        </h1>

        <div className="divider transition-elem delay-0"></div>
        
        <div className={`${styles['projects__columns']} columns`}>

          {this.getProjectCards()}        

        </div>
      </div>
    );
  }

  private getProjectCards() {
    return this.props.projects.map( 

      (project, i: number) => <div key={'proj_' + i} className={`column col-6 col-md-12 transition-elem delay-${i + 1} ${styles['projects__column']}`}>

        <div className="card">

          <div className={styles['projects__image-wrapper']}>
            <div className={styles['projects__image']} style={{backgroundImage: `url(${project.images[0]})`}}></div>
          </div>

          <div className="card-header">
            <div className="card-title h4 text-primary"> {project.name} <span className="text-gray fw-medium ml-1">{project.roles}</span> </div>
          </div>

          <div className="card-footer">
            <div className="btn-group btn-group-block">
              <Link to={'/projekter/' + project.urlName} className="btn btn-primary btn-lg"> Vis projekt </Link>

              { project.url != null 
                ? <a href={project.url} target='_blank' rel='noopener' className="btn btn-icon-right btn-lg"> 
                  Besøg side 
                  <i className="icon icon-link"></i> 
                </a> : '' }
              
            </div>
          </div>
        </div>

      </div>
    );
  }

}
 
export default Projects;