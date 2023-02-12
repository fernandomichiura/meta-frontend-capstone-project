import React from 'react';
import { useNavigate } from "react-router-dom";

import './Hero.scss';
import HeroLogo from '../../assets/hero-logo.jpg'
import Button from '../../components/Button';

const Hero = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/reservation');
  }

  return (
    <div id='c-hero-container'>
      <article>
        <section className='section-info'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, rerum temporibus? At quasi iusto ducimus autem.</p>

          <Button onClick={onClick}>Reserve a Table</Button>
        </section>

        <section className='section-image'>
          <div className='image-container'>
            <img src={HeroLogo} alt="Serving appetizers" />
          </div>
        </section>
      </article>
    </div>
  );
}

export default Hero;
