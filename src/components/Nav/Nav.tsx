import React, { Component } from 'react';
import styles from './Nav.module.scss';
import Logo from '../../images/mainLogo-white.png';

class Nav extends Component {
  render() {

    return (
      <nav className={styles.nav}>
        <a className={styles['nav__logo']}>
          <img src={Logo} alt="MBP Media"/>
        </a>
      </nav>
    );
  }
}

export default Nav;
