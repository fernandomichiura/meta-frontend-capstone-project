import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  SimpleGrid,
  Box,
  GridItem,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Text,
  Spinner,
} from "@chakra-ui/react";

import Button from "../../components/Button";
import './ConfirmationModal.scss';

const ReservationModal = ({ values, isOpen, onClose, onConfirmation, isLoading, hasError, errorMessage }) => {
  return (
    <>
      {values && (
        <Modal id='c-reservation-modal' isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
          <ModalContent >
            <ModalHeader>Confirm Reservation?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontSize='14px' mb={'24px'}>Please, check all of the information provided before confirming</Text>

              <Card>
                <CardBody>
                  <Stack divider={<StackDivider />} spacing='4'>
                    <Text fontSize='16px' mb={0}>Provided information</Text>

                    <GridItem w='100%'>
                      <SimpleGrid gridTemplateColumns='100px 1fr' columns={2} spacingX={6}>
                        <Box height='24px' textAlign={'right'}><Text as='b'>Fullname</Text></Box>
                        <Box height='24px'>{values.firstName} {values.lastName}</Box>
                        <Box height='24px' textAlign={'right'}><Text as='b'>E-mail</Text></Box>
                        <Box height='24px'>{values.email}</Box>
                        <Box height='24px' textAlign={'right'}><Text as='b'>Phone</Text></Box>
                        <Box height='24px'>{values.phone}</Box>
                      </SimpleGrid>
                    </GridItem>

                    <GridItem w='100%'>
                      <SimpleGrid gridTemplateColumns='100px 1fr' columns={2} spacingX={6}>
                      <Box height='24px' textAlign={'right'}><Text as='b'>Diners</Text></Box>
                        <Box height='24px'>{values.diners}</Box>
                        <Box height='24px' textAlign={'right'}><Text as='b'>Date</Text></Box>
                        <Box height='24px'>{values.date}</Box>
                        <Box height='24px' textAlign={'right'}><Text as='b'>Time</Text></Box>
                        <Box height='24px'>{values.time}</Box>
                      </SimpleGrid>
                    </GridItem>
                  </Stack>
                </CardBody>
              </Card>
            </ModalBody>

            <ModalFooter flex flexDir={'column'}>
              {hasError && errorMessage && <Text color='red' fontSize='14px' mb={'8px'}>{errorMessage}</Text>}

              <Button onClick={onConfirmation} disabled={isLoading} styles={{ width: '100%' }}>
                {isLoading ? <Spinner size='sm' /> : 'Confirm Reservation'}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default ReservationModal;
