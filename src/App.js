import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

import RouterRoutes from './routes';

function App() {
  return (
    <ChakraProvider>
      <RouterRoutes />
    </ChakraProvider>
  );
}

export default App;
