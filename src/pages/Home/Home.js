import React from 'react';
import Hero from './Hero';
import Main from './Main';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
