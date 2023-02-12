import React from 'react';

import Hero from './Hero';
import ReservationForm from './ReservationForm';
import './Main.scss';

const Main = () => {
  return (
    <main id='c-main-reservation'>
      <Hero />
      <ReservationForm />
    </main>
  );
}

export default Main;
