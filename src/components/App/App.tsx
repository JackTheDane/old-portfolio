import React, { Component } from 'react';
import styles from './App.module.scss';
import Nav from '../Nav/Nav';
import About from '../About/About';
import { BrowserRouter, Route } from 'react-router-dom';
import Projects from '../Projects/Projects';
import Project from '../Project/Project';

import ProfileImage from '../../images/profile.jpg';

export interface MenuItem {
  title: string;
  url: string;
  icon?: string;
}

export interface IProject {
  name: string;
  urlName: string;
  roles: string;
  description?: string;
  url?: string;
  images: string[];
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

            <Route exact={true} path='/' component={About} />

            <Route exact={true} path='/projekter' render={ () => <Projects projects={ this.projects } />} />

            <Route exact={true} path='/projekter/:project' render={ ({match}) => <Project project={ this.projects.filter( pro => pro.urlName == match.params.project)[0]  } /> } />

          </div>
        </div>

      </BrowserRouter>
    );
  }

  private menuItems: MenuItem[] = [
    {
      title: 'Om mig',
      url: '',
      icon: 'people'
    },
    {
      title: 'Udvalgte Projekter',
      url: 'projekter',
      icon: 'bookmark'
    },
    {
      title: 'Kontakt',
      url: 'kontakt',
      icon: 'message'
    }
  ];

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
    },
  ];
}

export default App;
