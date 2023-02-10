import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
