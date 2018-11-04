import * as React from 'react';
import { Component } from 'react';
import styles from './About.module.scss';
import { ISkill } from '../App/App';

import ProfileImage from '../../images/profile.jpg';

export interface AboutProps {
  skills: ISkill[];
}
 
export interface AboutState {
  
}
 
class About extends Component<AboutProps, AboutState> {
  // state = { :  }
  render() {

    return (
      <div className={styles.about}>

        <div className={styles["about__profile"]}>

          <div>
            <div className={styles['about__profileImageWrapper']}>
              <img className={styles['about__profileImage']} src={ProfileImage} alt="Martin Bøje Petersen"/>
            </div>
          </div>

          <div className={styles["about__profileTitleText"]}>
            <h1>
              Martin Bøje Petersen
            </h1>
            <h4>
              Front end Udvikler & IT Konsulent
            </h4>
          </div>

        </div>
        {/* <hr/> */}

        <div className={styles["about__content"]}>

          <div className={styles["about__subcontent"]}>
            <h3 className={styles["about__subcontentTitle"]}>
              Om mig
            </h3>
            <p>
              Frontend-udvikler & IT-konsulent, bosat i Hovedstadsområdet på Sjælland. 
              Jeg har været i Web-branchen siden 2015, og har arbejdet professionelt siden maj 2017, som hhv. freelancer, deltidsansat og selvstændig. <br/>
            <br/>
              Jeg anser det som værende mit job at skabe det bedste produkt for både brugeren og evt. udviklere, der skal overtage det senere. Udvikling af webløsninger er blandt mine største passioner, og jeg stræber altid efter at forbedre mig, ved at lære nye teknologier, udfordre mine evner og følge aktivt med i relevante diskussioner og podcasts, for at holde mig selv opdateret.
            </p>
          </div>


          <div className={styles["about__subcontent"]}>
            <h5 className={styles["about__subcontentTitle"]}>
              Færdigheder
            </h5>

            {this.getChips()}
          </div>

          <div className={styles["about__subcontent"]}>
            <h3>
              Erfaring
            </h3>

            <div className="timeline">
              <div className="timeline-item" id="timeline-example-1">
                <div className="timeline-left">
                  <a className="timeline-icon" href="#timeline-example-1">Link 1</a>
                </div>
                <div className="timeline-content">
                  Content 1
                </div>
              </div>

              <div className="timeline-item" id="timeline-example-2">
                <div className="timeline-left">
                  <a className="timeline-icon icon-lg" href="#timeline-example-2">
                    link 2
                    <i className="icon icon-check"></i>
                  </a>
                </div>
                <div className="timeline-content">
                  content 2
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  private getChips() {
    return this.props.skills.map( (skill, i: number) => {
      return <div className="chip m-2" key={'skill_' + i}>
        <img src={skill.img} className="avatar"/>
        {skill.name}
      </div>
    })
  }
}
 
export default About;