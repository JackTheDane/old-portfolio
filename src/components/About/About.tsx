import * as React from 'react';
import { Component } from 'react';
import styles from './About.module.scss';
import { ISkill, ISkills } from '../App/App';

import ProfileImage from '../../images/profile.jpg';
import { Link } from 'react-router-dom';

export interface AboutProps {
  skills: ISkills;
}
 
export interface AboutState {
  
}
 
class About extends Component<AboutProps, AboutState> {
  render() {

    return (
      <div className={`content-page ${styles.about}`}>
        <div className={styles["about__profile"]}>

          <div className="transition-elem delay-0">
            <div className={styles['about__profileImageWrapper']}>
              <img className={styles['about__profileImage']} src={ProfileImage} alt="Martin Bøje Petersen"/>
            </div>
          </div>

          <div className={`transition-elem delay-0 ${styles["about__profileTitleText"]}`}>
            <h1 className="mb-2 text-primary">
              Martin Bøje Petersen
            </h1>
            <h4 className="text-gray fw-medium">
              Webudvikler & IT Konsulent
            </h4>
          </div>
        </div>

        <div className={styles["about__content"]}>

          <div className={`transition-elem delay-1 ${styles["about__subcontent"]}`}>
            <h4 className={`${styles["about__subcontentTitle"]} text-primary`}>
            Front-end udvikler med kompetencer for backend & design
            </h4>
            <p className="mb-0">
              Mit navn er Martin Bøje Petersen, og jeg har siden 2015 været en del af Web-branchen, bl.a. som studerende, deltidsansat og selvstændig. <br/>
              <br />
              Jeg ser det som mit job at skabe det bedste produkt for både brugerne og de andre udviklere på mit hold. Derfor stræber jeg altid for at samarbejde med mit team og kunden for at opnå en harmoni mellem at skabe god brugeroplevelse og skrive let-forståelig kode. <br />
              <br />
              Se nogle af mine projekter <Link to={'/projekter'}>her</Link>.

            </p>
          </div>


          <div className={`transition-elem delay-2`}>
            <h5 className={`${styles["about__subcontentTitle"]} ${styles.chipsTitle} text-primary mb-0`}>
              Færdigheder
            </h5>

            <div className={`${styles.chipsWrapper}`}>
              {this.getChips()}
            </div>

          </div>

        </div>
      </div>
    );
  }

  private getChips() {
    const skillsArray = [];
    const skills = this.props.skills;

    for (var key in skills) {
      if (skills.hasOwnProperty(key)) {
        const skill = skills[key];

        skillsArray.push(<div className="chip mr-4 mt-4" key={'skill_' + skill.name}>
          <img src={skill.img} className="avatar"/>
          {skill.name}
        </div>);
      }
    }

    return skillsArray;

  }
}
 
export default About;