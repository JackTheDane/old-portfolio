import React from 'react';
import styles from './Project.module.scss';
import Carousel from '../Carousel/Carousel';

import { IProject } from '../App/App';
import { Link } from 'react-router-dom';

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
    return ( <div className={styles.project}>
      <Link to='/projekter' className="btn btn-link btn-lg my-2"><i className="icon icon-back"></i> Tilbage </Link>


      <h2 className="my-2">
        { this.props.project.name }
        <span className="mx-2"> { this.props.project.roles } </span>
      </h2>
      
      <Carousel images={this.props.project.images} />

      {
        this.props.project.description != null
        ? <p> {this.props.project.description} </p>
        : ''
      }
      
      { this.props.project.url != null 
        ? <a href={this.props.project.url} target='_blank' rel='noopener' className="btn btn-primary btn-lg"> 
          Besøg side 
          <i className="icon mx-2 icon-link"></i> 
        </a> 
        : '' 
      }

    </div> );
  }
}
 
export default Project;