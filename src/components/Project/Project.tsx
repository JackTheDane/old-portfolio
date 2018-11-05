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
    // this.state = { : };
  }
  render() { 
    return ( <div className={styles.project}>
      <div className="d-flex" style={{justifyContent: 'space-between'}}>
        <Link to='/projekter' className="btn btn-link btn-lg pl-0"> <i className="icon icon-back"></i> Tilbage </Link>
        <button className="btn btn-link btn-lg pr-0">
          Zoom
          <i className="icon icon-search ml-2"></i>
        </button>
      </div>

      <Carousel images={this.props.project.images} />

      <div className="d-flex mt-3" style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <h2 className="text-primary mb-0">
          { this.props.project.name }
          <span className="mx-2 text-gray"> { this.props.project.roles } </span>
        </h2>

        { this.props.project.url != null 
          ? <a href={this.props.project.url} target='_blank' rel='noopener' className="btn btn-primary btn-lg"> 
            Besøg side 
            <i className="icon ml-2 icon-link"></i> 
          </a> 
          : '' 
        }

      </div>


      

      {
        this.props.project.description != null
        ? <p> {this.props.project.description} </p>
        : ''
      }
      
    </div> );
  }
}
 
export default Project;