import React, { Component } from 'react';
import styles from './Nav.module.scss';
import Logo from '../../images/mainLogo-white.png';
import { Link, NavLink } from 'react-router-dom';

export interface MenuItem {
  title: string;
  url: string;
  icon?: string;
}

class Nav extends Component {

  render() {

    return (
      <nav className={styles.nav}>
        <Link to={'/'} className={styles['nav__logo']}>
          <img src={Logo} alt="MBP Media"/>
        </Link>

        <ul className={styles['menu']}>

         { this.getListItems() }         

        </ul>
      </nav>
    );
  }

  private menuItems: MenuItem[] = [
    {
      title: 'Om mig',
      url: 'om-mig'
    },
    {
      title: 'Projekter',
      url: 'projekter'
    },
    {
      title: 'Kontakt',
      url: 'kontakt'
    }
  ]

  private getListItems() {
    return this.menuItems.map( item => {
      return <NavLink activeClassName={styles['menu__item--selected']} to={ `/${item.url}` } className={styles['menu__item']}>
        <li>
          {item.title}
        </li>
      </NavLink>
    })
    
  }
}

export default Nav;
