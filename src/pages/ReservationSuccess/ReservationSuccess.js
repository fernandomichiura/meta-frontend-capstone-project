import React from 'react';
import { useLocation } from "react-router-dom";
import {
  Heading,
  Text,
} from "@chakra-ui/react";
import './ReservationSuccess.scss';

import Success from '../../assets/reservation-success.jpg';
import logo from '../../assets/logo.svg'

const formatDate = (date) => new Date(date).toLocaleDateString();

const ReservationSuccess = () => {
  const { state } = useLocation();
  const { name, date, time } = state;

  return (
    <main id='c-reservation-success'>
      <img className='background-image' src={Success} alt="Reservation Success" />

      <section>
        <article className='logo-container'>
          <img src={logo} alt="Little lemon logo" />
        </article>

        <Text fontSize='x-large'>Well done,</Text><Heading as="h1"> {name}!</Heading>
        <Text fontSize='md'>Everything set with your reservation for 
          <Text as='b' color='#f4ce14'> {formatDate(date)}</Text> at 
          <Text as='b' color='#f4ce14'> {time} </Text>.</Text>
      </section>
    </main>
  );
}

export default ReservationSuccess;
