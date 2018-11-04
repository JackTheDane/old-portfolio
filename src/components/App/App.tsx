import React, { Component } from 'react';
import styles from './App.module.scss';
import Nav from '../Nav/Nav';
import { BrowserRouter } from 'react-router-dom';

import ProfileImage from '../../images/profile.jpg';
import Routes from './Routes';

// Images
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

  private skills: ISkill[] = [
    {
      name: 'HTML 5',
      img: html5
    },
    {
      name: 'CSS 3',
      img: css3
    },
    {
      name: 'Sass',
      img: sass
    },
    {
      name: 'JavaScript ES6+',
      img: javascript
    },
    {
      name: 'ReactJS',
      img: react
    },
    {
      name: 'Angular 2+',
      img: angular
    },
    {
      name: 'Gulp',
      img: gulp
    },
    {
      name: 'CSS Modules',
      img: cssModules
    },
    {
      name: 'PHP',
      img: php
    },
    {
      name: 'MySQL',
      img: mysql
    },
    {
      name: 'WordPress',
      img: wordpress
    },
    {
      name: 'MongoDB',
      img: mongodb
    },
  ]

  private projects: IProject[] = [
    {
      name: 'Dental Media',
      urlName: 'dental-media',
      roles: 'Front end & Design',
      url: 'http://dentalmedia.io/en/',
      images: [
        'https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg',
        ProfileImage
      ]
    },
    {
      name: 'VENZO.NXT',
      urlName: 'venzo-nxt',
      roles: 'Front end & Design',
      url: 'http://venzonxt.com/',
      images: [
        'https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg',
        ProfileImage
      ]
    },
    {
      name: 'Hydr Esport',
      urlName: 'hydr-esport',
      roles: 'Front end',
      url: 'http://www.hydr-esport.com/',
      images: [
        'https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg',
        ProfileImage
      ]
    },
    {
      name: 'Book Business',
      urlName: 'book-business',
      roles: 'Front end & Design',
      url: 'http://mbpmedia.com/bookbusiness/',
      images: [
        'https://picturepan2.github.io/spectre/img/osx-el-capitan.jpg',
        ProfileImage
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
