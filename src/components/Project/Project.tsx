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
    return ( <div className={`content-page ${styles.project}`}>
      <Link to='/projekter' className="btn btn-link btn-lg pl-0 transition-elem delay-0"> <i className="icon icon-back"></i> Tilbage </Link>

      <Carousel className={"transition-elem delay-1"} images={this.props.project.images} />

      <div className="d-flex mt-3" style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <h2 className={`text-primary mb-0 transition-elem delay-2 ${styles.title}`}>
          { this.props.project.name }
          <span className="mx-2 text-gray fw-medium"> { this.props.project.roles } </span>
        </h2>

        { this.props.project.url != null 
          ? <a href={this.props.project.url} target='_blank' rel='noopener' className="btn btn-primary btn-lg transition-elem delay-2"> 
            Besøg side 
            <i className="icon ml-2 icon-link"></i> 
          </a> 
          : '' 
        }

      </div>

      <div className="divider transition-elem delay-2 my-3"></div>

      {
        this.props.project.description != null
        ? <p className="transition-elem delay-3"> {this.props.project.description} </p>
        : ''
      }
      
    </div> );
  }
}
 
export default Project;