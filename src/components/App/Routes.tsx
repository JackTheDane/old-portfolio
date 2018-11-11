import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../About/About';
import Projects from '../Projects/Projects';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

import { IProject, ISkill, ISkills } from './App';

export interface RoutesProps {
  projects: IProject[];
  skills: ISkills;
}
 
class Routes extends React.Component<RoutesProps, {}> {
  render() { 
    return ( 
      
      <Switch>
        <Route exact={true} path='/' render={ () => <About skills={ this.props.skills } /> } />

        <Route exact={true} path='/projekter' render={ () => <Projects projects={ this.props.projects } />} />

        <Route exact={true} path='/projekter/:project' render={ ({match}) => <Project project={ this.props.projects.filter( pro => pro.urlName == match.params.project)[0]  } /> } />

        <Route exact={true} path='/kontakt' component={Contact} />
      </Switch>
      
    );
  }
}
 
export default Routes;