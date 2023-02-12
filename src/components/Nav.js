import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

import logo from '../assets/logo.svg'
import basket from '../assets/basket-icon.svg';
import menuIcon from '../assets/hamburger-menu.svg';

const Nav = () => {
  return (
    <nav id='c-navigation'>
      <button id='c-mobile-menu'>
        <img src={menuIcon} alt='Menu button' />
      </button>

      <Link to='/'>
        <img className='navigation-logo' src={logo} alt='Little Lemon Logo' />
      </Link>
      
      <ul className='navigation-list'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/reservation'>Reservation</Link></li>
        <li><Link to='/order'>Order Online</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
      
      <button id='c-basket'>
        <img src={basket} alt='Menu button' />
      </button>
    </nav>
  );
}

export default Nav;
