import React, { Component } from 'react';
import styles from './App.module.scss';
import Nav from '../Nav/Nav';
import About from '../About/About';
import { BrowserRouter, Route } from 'react-router-dom';
import Projects from '../Projects/Projects';

class App extends Component {
  render() {

    return (
      <BrowserRouter>

        <div className={styles.app}>
          <div className={styles['app__sidebar']}>
            
            <Nav />

          </div>

          <div className={styles['app__content']}>

            <Route path='/om-mig' component={About} />

            <Route exact={true} path='/projekter' component={Projects} />

            <div className={styles['app__contentCorner']}>

            </div>

          </div>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
