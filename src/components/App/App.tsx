import React, { Component } from 'react';
import styles from './App.module.scss';
import Nav from '../Nav/Nav';
import { BrowserRouter } from 'react-router-dom';

import ProfileImage from '../../images/profile.jpg';
import Routes from './Routes';

// Images - Skills
import html5 from '../../images/skills/html5.jpg';
import angular from '../../images/skills/angular.jpg';
import cssModules from '../../images/skills/css-modules.jpg';
import css3 from '../../images/skills/css3.jpg';
import gulp from '../../images/skills/gulp.jpg';
import javascript from '../../images/skills/javascript.jpg';
import mongodb from '../../images/skills/mongodb.jpg';
import mysql from '../../images/skills/mysql.jpg';
import php from '../../images/skills/php.jpg';
import react from '../../images/skills/react.jpg';
import sass from '../../images/skills/sass.jpg';
import wordpress from '../../images/skills/wordpress.jpg';
import typescript from '../../images/skills/typescript.jpg';

// Images - Projects
import dm_forside from '../../images/projekter/dentalmedia/forside.jpg';
import dm_header from '../../images/projekter/dentalmedia/header.jpg';
import dm_readmore from '../../images/projekter/dentalmedia/readmore.jpg';
import dm_steps from '../../images/projekter/dentalmedia/steps.jpg';

import vz_forside from '../../images/projekter/venzonxt/forside.jpg';
import vz_breaker from '../../images/projekter/venzonxt/breaker.jpg';
import vz_nextgen from '../../images/projekter/venzonxt/nextgen.jpg';
import vz_understand from '../../images/projekter/venzonxt/understand.jpg';

import hy_forside from '../../images/projekter/hydr/forside.jpg';
import hy_medlemskab from '../../images/projekter/hydr/medlemskab.jpg';
import hy_side from '../../images/projekter/hydr/side.jpg';

import bb_forside from '../../images/projekter/bookbusiness/forside.jpg';
import bb_search from '../../images/projekter/bookbusiness/search.jpg';

// Images - Bg
import backgroundImage_1920 from '../../images/bg-1920.jpg';


export interface MenuItem {
  title: string;
  url: string;
  icon?: string;
  subItems?: MenuItem[];
}

export interface IProject {
  name: string;
  urlName: string;
  roles: string;
  description?: string;
  url?: string;
  images: string[];
}

export interface ISkill {
  name: string;
  img: string;
}

export interface ISkills {
  html5: ISkill;
  css3: ISkill;
  sass: ISkill;
  js: ISkill;
  react: ISkill;
  angular: ISkill;
  typescript: ISkill;
  gulp: ISkill;
  cssModules: ISkill;
  php: ISkill;
  mysql: ISkill;
  wp: ISkill;
  mongodb: ISkill;
  [key: string]: ISkill;
}


class App extends Component {

  render() {

    return (
      <BrowserRouter>

        <div className={styles.app} style={{backgroundImage: `url(${backgroundImage_1920})`}}>
          <div className={styles['app__sidebar']}>
            
            <Nav menuItems={this.menuItems} />

          </div>

          <div className={styles['app__content']}>

            <Routes skills={this.skills} projects={this.projects} />

          </div>
        </div>

      </BrowserRouter>
    );
  }

  private skills = {
    html5: {
      name: 'HTML 5',
      img: html5
    },
    css3: {
      name: 'CSS 3',
      img: css3
    },
    sass: {
      name: 'Sass',
      img: sass
    },
    js: {
      name: 'JavaScript ES6+',
      img: javascript
    },
    react: {
      name: 'ReactJS',
      img: react
    },
    angular: {
      name: 'Angular 2+',
      img: angular
    },
    typescript: {
      name: 'Typescript',
      img: typescript
    },
    gulp: {
      name: 'Gulp',
      img: gulp
    },
    cssModules: {
      name: 'CSS Modules',
      img: cssModules
    },
    php: {
      name: 'PHP',
      img: php
    },
    mysql: {
      name: 'MySQL',
      img: mysql
    },
    wp: {
      name: 'WordPress',
      img: wordpress
    },
    mongodb: {
      name: 'MongoDB',
      img: mongodb
    }
  }

  private projects: IProject[] = [
    {
      name: 'Dental Media',
      urlName: 'dental-media',
      roles: 'Front end & Design',
      url: 'http://dentalmedia.io/en/',
      images: [
        dm_header,
        dm_forside,
        dm_readmore,
        dm_steps
      ],
      description: `Dental Media ApS er et marketingbureau og software udbyder, der hjælper tandlæger verden over med at få flere kunder i klinikken.
      I efteråret 2017 fik jeg til opgave at lave et nyt WordPress site til virksomheden, der var enkelt, luftigt og føltes levende, med kun en basal prototype af forsiden som udgangspunkt.
      Mine opgaver i projektet var at udarbejde et design og implementerer det gennem brug af page-builder temaet “Avada”.
      `
    },
    {
      name: 'VENZO.nxt',
      urlName: 'venzo-nxt',
      roles: 'Front end & Design',
      url: 'http://venzonxt.com/',
      images: [
        vz_forside,
        vz_breaker,
        vz_nextgen,
        vz_understand
      ],
      description: `VENZO.nxt, et datterselskab til VENZO a/s, er et IT selskab der specialiserer sig i Cloud og AI løsninger til datahåndtering og analysering. 

      Som et nyt selskab, havde VENZO.nxt ingen branding eller hjemmeside selv, andet end fra deres hovedselskab. Min del af projektet fokuserede primært på den tekniske opsætning af siden, samt implementering af vores mobile-first responsive design og efterfølgende support og videreudvikling. 
      
      Siden kører på WordPress, med et custom tema og bruger Advanced Custom Fields til implementering af tekst, billeder og videoer på siden.
      `
    },
    {
      name: 'Hydr eSport',
      urlName: 'hydr-esport',
      roles: 'Front end',
      url: 'http://www.hydr-esport.com/',
      images: [
        hy_forside,
        hy_medlemskab,
        hy_side
      ],
      description: `Hydr eSport er en virksomhed, der tilbyder træning inden for Esport af alle slags, i alle niveauer. 

      Hydr eSports hjemmeside var oprindeligt lavet som et eksamensprojekt af en tredjepart. Jeg blev hyret til at opdatere og strømline siden både visuelt og teknisk. Mit fokus for projektet har været at udvikle nye features og templates, der skulle være brugervenlige nok til at kunne overtages og bruges af virksomheden selv, uden krav for teknisk kunnen.
      
      Siden er bygget på et custom tema i WordPress og gør brug af bl.a. “Custom Post Types” og “Advanced Custom Fields”.
      `
    },
    {
      name: 'Book Business',
      urlName: 'book-business',
      roles: 'Front end & Design',
      url: 'http://mbpmedia.com/bookbusiness/',
      images: [
        bb_forside,
        bb_search
      ],
      description: `I efteråret 2017 blev en studiekammerat og jeg bedt om at udarbejde en prototype til en flybooking applikation i forbindelse med et skoleprojekt. Min hovedopgave i projektet var design og implementering af forsiden og søgebaren for prototypen.

      Prototypen er lavet gennem brug af CSS frameworket “Bootstrap” og almindelig JavaScript.
      `
    }
  ];

  private menuItems: MenuItem[] = [
    {
      title: 'Om mig',
      url: '',
      icon: 'people'
    },
    {
      title: 'Udvalgte Projekter',
      url: 'projekter',
      icon: 'bookmark',
      subItems: this.projects.map( (proj):MenuItem => ({
        title: proj.name,
        url: proj.urlName
      }))
    },
    {
      title: 'Kontakt',
      url: 'kontakt',
      icon: 'message'
    }
  ];

}

export default App;
