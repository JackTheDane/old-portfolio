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

        <div className={styles.mediaPlatforms}>

          <a target='_blank' rel='noopener' href="https://www.linkedin.com/in/martin-b%C3%B8je-petersen-74459173/" className={`btn btn-link ${styles.mediaPlatformsButton}`}>
            <svg style={{marginTop: '-5px'}} xmlns="http://www.w3.org/2000/svg"> <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"></path> <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"></path></svg>
            LinkedIn
          </a>

          <a target='_blank' rel='noopener' href="https://github.com/JackTheDane" className={`btn btn-link ${styles.mediaPlatformsButton}`}>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"/>
            </svg>
            GitHub
          </a>

          <a target='_blank' rel='noopener' href="/documents/martin-boeje-petersen_cv.pdf" className={`btn btn-link ${styles.mediaPlatformsButton}`}>
            <i className="icon icon-people mr-2"></i>
            CV
          </a>

        </div>
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
