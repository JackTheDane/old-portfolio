import React, { Component } from 'react';
import styles from './Nav.module.scss';
import LogoAndText from '../../images/mainLogo-white.png';
import Logo from '../../images/mainLogoOnly-white.png';
import { Link, NavLink } from 'react-router-dom';

import { MenuItem } from '../App/App';

export interface NavProps {
  menuItems: MenuItem[];
}

export interface NavState {
  isMobileMenuVisible: boolean;
  windowWidth: number;
}

class Nav extends Component<NavProps, NavState> {

  constructor(props: NavProps) {
    super(props);
    this.state = { 
      isMobileMenuVisible: false,
      windowWidth: 0
    };
  }

  render() {

    return (
      <nav className={`${styles.nav} ${this.state.isMobileMenuVisible ? styles['nav--shown'] : ''}`}>
        

        {this.getNavLogoSection()}


        <ul className={`${styles['menu']} ${ this.state.isMobileMenuVisible ? styles['menu--shown'] : '' }`}>

         { this.getListItems() }         

        </ul>
      </nav>
    );
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', () => this.updateWindowWidth());
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateWindowWidth());
  }
  
  updateWindowWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  public setMobileMenuDisplay(shouldShow: boolean) {
    this.setState({
      isMobileMenuVisible: shouldShow
    })
  }

  private getNavLogoSection() {
    return this.state.windowWidth >= 1200
      ? <Link to={'/'} className={styles['nav__logo']}>
          <img src={LogoAndText} className="img-fit-contain" alt="MBP Media"/>
        </Link>
      : <div className={styles['nav__mobileMenu']}>
          <Link onClick={ () => this.setMobileMenuDisplay(false) } to={'/'} className={styles['nav__logo--mobile']}>
            <img src={Logo} className="img-fit-contain" alt="MBP Media"/>
          </Link>
          <button onClick={ () => this.setMobileMenuDisplay(!this.state.isMobileMenuVisible) } className="btn btn-lg btn-primary">
            <i className={`icon ${ this.state.isMobileMenuVisible ? 'icon-cross' : 'icon-menu' } mr-2`}></i>
            { this.state.isMobileMenuVisible
              ? 'Close'
              : 'Menu' }
          </button>
        </div>
  }

  private getListItems() {
    return this.props.menuItems.map( (item, i: number) => {
      return <span key={'navItem_' + i} className={styles['menu__item-wrapper']} ><NavLink onClick={ () => this.setMobileMenuDisplay(false) } exact={item.isExact ? true : false} activeClassName={styles['menu__item--selected']} to={ `/${item.url}` } className={styles['menu__item']}>
        <li>
          { item.icon != null ? <i className={`icon icon-${item.icon} ${styles['menu__item-icon']}`}></i> : ''}
          {item.title}
        </li>        

      </NavLink>
      {item.subItems != null 
      ? <ul className={styles['menu__subitem-list']}>
            {item.subItems.map( (item, i: number) => <NavLink key={'subItem_'+i} onClick={ () => this.setMobileMenuDisplay(false) } className={styles['menu__subitem']} activeClassName={styles['menu__subitem--selected']} to={ `/projekter/${item.url}` } >
              <li>
                {item.title}
              </li>
            </NavLink> )}
          </ul>
      : ''}
      </span>
    })
    
  }
}

export default Nav;
