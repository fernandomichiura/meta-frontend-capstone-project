import React from 'react';
import './Hero.scss';
import HeroImage from '../../assets/about_2.jpg';

const Hero = () => {
  return (
    <article id='c-hero-reservation'>
      <div className='reservation-container'>
        <section className='reservation-info'>
          <h1>Little Lemon</h1>
          <h3>Table Reservation</h3>
          <p>Please, fill the form below to register your reservation.</p>
        </section>
        <section className='reservation-image'>
          <img src={HeroImage} alt="Restaurant facade" />
        </section>
      </div>
    </article>
  );
}

export default Hero;
