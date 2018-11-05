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
            <h1 className="mb-2 text-primary">
              Martin Bøje Petersen
            </h1>
            <h4 className="text-gray">
              Webudvikler & IT Konsulent
            </h4>
          </div>

        </div>
        {/* <hr/> */}

        <div className={styles["about__content"]}>

          <div className={styles["about__subcontent"]}>
            <h3 className={`${styles["about__subcontentTitle"]} text-primary`}>
              Om mig
            </h3>
            <p>
              Front-end udvikler med kompetencer for backend & design. 
              Jeg har været i Web-branchen siden 2015, og har arbejdet professionelt siden maj 2017, som hhv. freelancer, deltidsansat og selvstændig. <br/>
            <br/>
              Jeg anser det som værende mit job at skabe det bedste produkt for både brugeren og evt. udviklere, der skal overtage det senere. Udvikling af webløsninger er blandt mine største passioner, og jeg stræber altid efter at forbedre mig, ved at lære nye teknologier, udfordre mine evner og følge aktivt med i relevante diskussioner og podcasts, for at holde mig selv opdateret.
            </p>
          </div>


          <div className={styles["about__subcontent"]}>
            <h5 className={`${styles["about__subcontentTitle"]} text-primary`}>
              Færdigheder
            </h5>

            {this.getChips()}
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