import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../About/About';
import Projects from '../Projects/Projects';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

import { CSSTransition, TransitionGroup } from "react-transition-group";

import { IProject, ISkills } from './App';

export interface RoutesProps {
  projects: IProject[];
  skills: ISkills;
}
 
class Routes extends React.Component<RoutesProps, {}> {
  render() { 
    return (
      <div></div>
    );
  }
}
 
export default Routes;