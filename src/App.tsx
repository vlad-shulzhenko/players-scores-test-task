import React from 'react';
import {
  ChakraProvider,
  theme,
  Flex,
} from '@chakra-ui/react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TableComponent from './components/TableComponent/TableComponent';

const App = () => (
  <ChakraProvider theme={theme}>
    <Flex minH="100vh" direction="column">
      <Header />
      <Flex
        flexGrow={1}
        justify="center"
        align="center"
        py="50px"
      >
        <TableComponent />
      </Flex>
      <Footer />
    </Flex>
  </ChakraProvider>
);

export default App;
