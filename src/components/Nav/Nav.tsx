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
      return <span key={'navItem_' + i}><NavLink exact={true} activeClassName={styles['menu__item--selected']} to={ `/${item.url}` } className={styles['menu__item']}>
        <li>
          { item.icon != null ? <i className={`icon icon-${item.icon} ${styles['menu__item-icon']}`}></i> : ''}
          {item.title}
        </li>        

      </NavLink>
      {item.subItems != null 
      ? <NavLink className={styles['menu__subitem-list']} activeClassName={styles['menu__subitem-list--selected']} to={ `/${item.url}` }> 
          <ul>
            {item.subItems.map( (item, i: number) => <NavLink key={'subItem_'+i} className={styles['menu__subitem']} activeClassName={styles['menu__subitem--selected']} to={ `/projekter/${item.url}` } >
              <li>
                {item.title}
              </li>
            </NavLink> )}
          </ul>
        </NavLink>
      : ''}
      </span>
    })
    
  }
}

export default Nav;
