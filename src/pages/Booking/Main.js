import React from 'react';

import Hero from './Hero';
import BookingForm from './BookingForm';
import './Main.scss';

const Main = () => {
  return (
    <main id='c-main-reservation'>
      <Hero />
      <BookingForm />
    </main>
  );
}

export default Main;
