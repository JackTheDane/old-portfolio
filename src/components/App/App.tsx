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

        <div className={styles.app}>
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
      ]
    },
    {
      name: 'VENZO.NXT',
      urlName: 'venzo-nxt',
      roles: 'Front end & Design',
      url: 'http://venzonxt.com/',
      images: [
        vz_forside,
        vz_breaker,
        vz_nextgen,
        vz_understand
      ]
    },
    {
      name: 'Hydr Esport',
      urlName: 'hydr-esport',
      roles: 'Front end',
      url: 'http://www.hydr-esport.com/',
      images: [
        hy_forside,
        hy_medlemskab,
        hy_side
      ]
    },
    {
      name: 'Book Business',
      urlName: 'book-business',
      roles: 'Front end & Design',
      url: 'http://mbpmedia.com/bookbusiness/',
      images: [
        'https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg'
      ]
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
