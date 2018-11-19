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

  render() { 
    return ( <div className={`content-page ${styles.project}`}>
      <div className="padx-xs">
        <Link to='/projekter' className="btn btn-link btn-lg pl-0 btn-icon-left transition-elem delay-0"> <i className="icon icon-back"></i> Andre projekter </Link>
      </div>

      <Carousel className={"transition-elem delay-1"} images={this.props.project.images} />

      <div className="d-flex padx-xs mt-3" style={{justifyContent: 'space-between', alignItems: 'flex-start'}}>
        <h2 className={`text-primary mb-2 transition-elem delay-2 ${styles.title}`}>
          { this.props.project.name }
          <div className="text-gray fw-medium"> { this.props.project.roles } </div>
        </h2>

        { this.props.project.url != null 
          ? <a href={this.props.project.url} target='_blank' rel='noopener' className="btn btn-primary btn-icon-right btn-lg transition-elem delay-2 my-a"> 
            Besøg side 
            <i className="icon icon-link"></i> 
          </a> 
          : '' 
        }

      </div>

      <div className="divider transition-elem delay-2 my-3"></div>
      
      <div className="transition-elem delay-3 my-5 padx-xs">
        {
          this.getDescription()
        }
      </div>

      {
        this.props.project.skillsUsed != null
          ? <div className={`transition-elem delay-4 ${styles.subcontent}`}>
          <h5 className={`text-primary`}>
            Færdigheder brugt
          </h5>

          {this.getChips()}
        </div>
        : ''
      }
      
    </div> );
  }

  private getDescription() {
    const description = this.props.project.description != null
      ? this.props.project.description.map( (text, i) => <p key={`projInf-${i}`} style={{marginBottom: '1em'}}> {text} </p> )
      : ''

    return description;
  }

  private getChips() {
    return this.props.project.skillsUsed.map( skill => <div className="chip mr-4 mt-4" key={'skill_' + skill.name}>
      <img src={skill.img} className="avatar"/>
      {skill.name}
    </div> )
  }
}
 
export default Project;