import * as React from 'react';
import { Component } from 'react';
import styles from './About.module.scss';

import ProfileImage from '../../images/profile.jpg';
import HTML5 from '../../images/skills/html5.png';

export interface AboutProps {
  
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
              Frontend-udvikler & selvstændig IT-konsulent, bosat i Hovedstadsområdet på Sjælland. 
            <br/>Jeg har været i Web-branchen siden 2015, og har arbejdet professionelt siden maj 2017, som hhv. freelancer, deltidsansat og selvstændig.
            <br/>
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

        </div>
      </div>
    );
    
  }

  private skills: { name:string; img:any; }[] = [
    {
      name: 'HTML5',
      img: HTML5
    }
  ]

  private getChips() {
    return this.skills.map( skill => {
      return <div className="chip">
        <img src={skill.img} className="avatar avatar-sm"/>
        {skill.name}
      </div>
    })
  }
}
 
export default About;