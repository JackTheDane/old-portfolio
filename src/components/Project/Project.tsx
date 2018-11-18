import React from 'react';
import styles from './Project.module.scss';
import Carousel from '../Carousel/Carousel';

import { IProject, ISkill } from '../App/App';
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
          <div className="text-gray fw-medium"> { this.props.project.roles } </div>
        </h2>

        { this.props.project.url != null 
          ? <a href={this.props.project.url} target='_blank' rel='noopener' className="btn btn-primary btn-lg transition-elem delay-2 my-a"> 
            Besøg side 
            <i className="icon ml-2 icon-link"></i> 
          </a> 
          : '' 
        }

      </div>

      <div className="divider transition-elem delay-2 my-3"></div>
      
      <div className="transition-elem delay-3">
        {
          this.getDescription()
        }
      </div>

      {
        this.props.project.skillsUsed != null
          ? <div className={`transition-elem delay-4 mt-5 ${styles.subcontent}`}>
          <h5 className={`${styles["about__subcontentTitle"]} text-primary`}>
            Færdigheder
          </h5>

          {this.getChips()}
        </div>
        : ''
      }
      
    </div> );
  }

  private getDescription() {
    const description = this.props.project.description != null
      ? this.props.project.description.map( text => <p style={{marginBottom: '1em'}}> {text} </p> )
      : ''

    return description;
  }

  private getChips() {
    return this.props.project.skillsUsed.map( skill => <div className="chip m-2" key={'skill_' + skill.name}>
      <img src={skill.img} className="avatar"/>
      {skill.name}
    </div> )
  }
}
 
export default Project;