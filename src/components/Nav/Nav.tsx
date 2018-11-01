import React, { Component } from 'react';
import styles from './Nav.module.scss';
import Logo from '../../images/mainLogo-white.png';
import { Link, NavLink } from 'react-router-dom';

import { MenuItem } from '../App/App';

export interface NavProps {
  menuItems: MenuItem[];
}

class Nav extends Component<NavProps, {}> {

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

  private getListItems() {
    return this.props.menuItems.map( (item, i: number) => {
      return <NavLink key={'navItem_' + i} exact={true} activeClassName={styles['menu__item--selected']} to={ `/${item.url}` } className={styles['menu__item']}>
        <li>
          { item.icon != null ? <i className={`icon icon-${item.icon} ${styles['menu__item-icon']}`}></i> : ''}
          {item.title}
        </li>
      </NavLink>
    })
    
  }
}

export default Nav;
