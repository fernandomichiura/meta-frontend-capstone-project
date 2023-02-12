import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  Flex,
  InputLeftAddon,
  InputGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useDisclosure,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../../hooks/useSubmit";
import ReservationModal from './ConfirmationModal';
import './BookingForm.scss';

const BookingForm = () => {
  const { isLoading, response, submit, hasRequestError } = useSubmit();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [formValues, setFormValues] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (response) {
      if (hasRequestError) {
        return;
      }

      navigate('/reservation-success', {
        state: {
          name: formValues.firstName,
          date: formValues.date,
          time: formValues.time,
        }
      });
    }
  }, [response]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      diners: 2,
      date: '',
      time: '',
    },
    onSubmit: (values) => {
      setFormValues(values);
      onOpen();
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email().required('Required'),
      phone: Yup.string().required('Required'),
      diners: Yup.string().required('Required'),
      date: Yup.string().required('Required'),
      time: Yup.string().required('Required'),
    }),
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  }

  const onSubmitConfirmation = () => {
    submit('', formValues);
  }

  return (
    <VStack id="section-reservation-form">
      <article className='reservation-form-wrapper'>
        <form onSubmit={onFormSubmit}>
          <Heading as="h1">PERSONAL INFORMATION</Heading>

          <Box pt={8} mb={16} w="100%">
            <VStack spacing={4}>
              <Flex gap='10' width={'100%'}>
                <FormControl className="form-control" isInvalid={formik.touched.firstName && formik.errors.firstName}>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder='John'
                    {...formik.getFieldProps("firstName")}
                  />
                  <FormErrorMessage className="input-error" name="firstName">Required field</FormErrorMessage>
                </FormControl>

                <FormControl className="form-control" isInvalid={formik.touched.lastName && formik.errors.lastName}>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder='Doe'
                    {...formik.getFieldProps("lastName")}
                  />
                  <FormErrorMessage className="input-error" name="lastName">Required field</FormErrorMessage>
                </FormControl>
              </Flex>
              
              <Flex width={'100%'}>
                <FormControl className="form-control" isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='john_doe@email.com'
                    {...formik.getFieldProps("email")}
                  />

                  <FormErrorMessage className="input-error" name="email">Required field</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex width={'100%'}>
                <FormControl className="form-control" isInvalid={formik.touched.phone && formik.errors.phone}>
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <InputGroup className="addon">
                    <InputLeftAddon className="form-left-addon" children='+234' />
                    <NumberInput max={15} width={'100%'}>
                      <NumberInputField 
                        id="phone"
                        name="phone"
                        placeholder='(201) 555-0123'
                        {...formik.getFieldProps("phone")}
                      />

                      <FormErrorMessage className="input-error" name="phone">Required field</FormErrorMessage>
                    </NumberInput>
                  </InputGroup>
                </FormControl>
              </Flex>
            </VStack>
          </Box>

          <Heading as="h1">RESERVATION</Heading>

          <Box pt={8} w="100%">
            <VStack spacing={4}>
              <Flex width={'50%'} alignSelf={'flex-start'}>
                <FormControl className="form-control" isInvalid={formik.touched.firstName && formik.errors.firstName}>
                  <FormLabel htmlFor="firstName">Number of diners</FormLabel>
                  <NumberInput defaultValue={2}>
                    <NumberInputField 
                      id="diners"
                      name="diners"
                      {...formik.getFieldProps("diners")}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>

                    <FormErrorMessage className="input-error" name="diners">Required field</FormErrorMessage>
                  </NumberInput>
                </FormControl>
              </Flex>

              <Flex gap='10' width={'100%'}>
                <FormControl className="form-control" isInvalid={formik.touched.date && formik.errors.date}>
                  <FormLabel htmlFor="date">Date</FormLabel>
                  <Input
                    id="date"
                    name="date"
                    placeholder='Doe'
                    type="date"
                    {...formik.getFieldProps("date")}
                  />
                  
                  <FormErrorMessage className="input-error" name="date">Required field</FormErrorMessage>
                </FormControl>

                <FormControl className="form-control" isInvalid={formik.touched.time && formik.errors.time}>
                  <FormLabel htmlFor="time">Time</FormLabel>
                  <Input
                    id="time"
                    name="time"
                    placeholder='Doe'
                    type="time"
                    {...formik.getFieldProps("time")}
                  />

                  <FormErrorMessage className="input-error" name="time">Required field</FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex width={'100%'} justifyContent={'center'} pt={10}>
                <button id='form-submit' type="submit" disabled={isLoading}>
                  Register Reservation
                </button>
              </Flex>
            </VStack>
          </Box>
        </form>
      </article>

      <ReservationModal
        values={formValues}
        isOpen={isOpen}
        onClose={onClose}
        onConfirmation={onSubmitConfirmation}
        isLoading={isLoading}
        hasError={hasRequestError}
        errorMessage={response?.message}
      />
    </VStack>
  );
};

export default BookingForm;
