import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  theme,
  Flex,
} from '@chakra-ui/react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TableComponent from './components/TableComponent/TableComponent';
import { ResponseExample } from './types/ResponseExample';

const App = () => {
  const [response, setResponse] = useState<ResponseExample[]>(JSON.parse(sessionStorage.getItem('players') || '[]'));
  const [isSorted, setIsSorted] = useState<boolean>(JSON.parse(sessionStorage.getItem('orderSort') || 'true'));
  const sortedItems = [...response].sort((a: ResponseExample, b: ResponseExample) => {
    return isSorted ? a.score - b.score : b.score - a.score;
  });

  const sortHandler = () => {
    setIsSorted(() => {
      sessionStorage.setItem('orderSort', JSON.stringify(!isSorted));
      return !isSorted;
    });
  };

  useEffect(() => {
    const sse = new EventSource('https://server-players-scores.herokuapp.com/');

    sse.onmessage = function (event) {
      const newPlayer = JSON.parse(event.data);
      setResponse((currentPlayers) => {
        sessionStorage.setItem('players', JSON.stringify([...currentPlayers, newPlayer]));
        return [...currentPlayers, newPlayer];
      });
    };

    sse.onerror = function () {
      console.warn('An error occurred while getting the user');
      sse.close();
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" direction="column">
        <Header />
        <Flex
          flexGrow={1}
          justify="center"
          align="center"
          py="50px"
        >
          <TableComponent
            sortedItems={sortedItems}
            isSorted={isSorted}
            sortHandler={sortHandler}
          />
        </Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
