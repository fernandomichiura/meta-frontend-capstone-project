import React from 'react';
import { Link } from 'react-router-dom';
import FooterImage from '../assets/footer-restaurant.jpg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer id='c-footer'>
      <article>
        <section>
          <div className='image-container'>
            <img src={FooterImage} alt="Cook seasoning a beautiful salad" />
          </div>
        </section>
        <section>
          <h2>Menu</h2>
          <ul className='navigation-list'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/reservation'>Reservation</Link></li>
            <li><Link to='/order'>Order Online</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <ul className='navigation-list'>
            <li><span>4205 Pringle Drive - Chicago IL</span></li>
            <li><span>312-402-5283</span></li>
            <li><span>littlelemon@email.com</span></li>
          </ul>
        </section>
        <section>
          <h2>Social Media</h2>
          <ul className='navigation-list'>
            <li><a href='https://www.facebook.com/'>Facebook</a></li>
            <li><a href='https://www.instagram.com/'>Instagram</a></li>
            <li><a href='https://www.linkedin.com/'>LinkedIn</a></li>
            <li><a href='https://www.tiktok.com/pt-BR/'>TikTok</a></li>
          </ul>
        </section>
      </article>
    </footer>
  );
}

export default Footer;
