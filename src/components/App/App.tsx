import React, { Component } from 'react';
import styles from './App.module.scss';
import Nav from '../Nav/Nav';

class App extends Component {
  render() {

    return (
      <div className={styles.app}>
        <div className={styles['app__sidebar']}>
          
          <Nav />

        </div>

        <div className={styles['app__content']}>
          Content
        </div>
      </div>
    );
  }
}

export default App;
