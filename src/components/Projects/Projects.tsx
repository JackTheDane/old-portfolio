import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.scss';

export interface ProjectsProps {
  
}
 
export interface ProjectsState {
  
}

export interface Project {
  name: string;
  roles: string;
  description?: string;
  url?: string;
}
 
class Projects extends React.Component<ProjectsProps, ProjectsState> {
  render() { 
    return ( 
      <div className="columns">

        {this.getProjectCards()}        

      </div>
    );
  }

  private projects: Project[] = [
    {
      name: 'Dental Media',
      roles: 'Front end & Design',
      url: 'http://dentalmedia.io/en/'
    },
    {
      name: 'VENZO.NXT',
      roles: 'Front end & Design',
      url: 'http://venzonxt.com/'
    },
    {
      name: 'Hydr Esport',
      roles: 'Front end',
      url: 'http://www.hydr-esport.com/'
    },
    {
      name: 'Book Business',
      roles: 'Front end & Design',
      url: 'http://mbpmedia.com/bookbusiness/'
    },
  ];

  private getProjectCards() {
    return this.projects.map( project => {
      const urlName = project.name
                      .toLowerCase()
                      .replace(/\s|\.|\//g, '-');
      
      return (<div className={`column col-6 col-xs-12 ${styles['projects__column']}`}>

        <div className="card">
          <div className="card-image">
            <img src="https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg" className="img-responsive" />
          </div>

          <div className="card-header">
            <div className="card-title h5"> {project.name} </div>
            <div className="card-subtitle text-gray"> {project.roles} </div>
          </div>

          <div className="card-footer">
            <div className="btn-group btn-group-block">
              <Link to={'/projekter/' + urlName} className="btn btn-primary"> Vis projekt </Link>

              { project.url != null ? <a href={project.url} target='_blank' rel='noopener' className="btn"> Besøg side </a> : '' }
              
            </div>
          </div>
        </div>

      </div>)
    })
  }

}
 
export default Projects;