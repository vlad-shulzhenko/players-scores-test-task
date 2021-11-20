import React, { useEffect, useState } from 'react';
import {
  Box, Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr, useColorModeValue,
} from '@chakra-ui/react';
import {
  FaUserAlt,
  FaHashtag,
  FaArrowUp,
  FaArrowDown,
} from 'react-icons/fa';
import { ResponseExample } from '../../types/ResponseExample';

const TableComponent = () => {
  const [response, setResponse] = useState<ResponseExample[]>([]);
  // const [sorted, setSorted] = useState<boolean>(true);
  const bg = useColorModeValue('#d8d8d8', '#e5e5e5');

  useEffect(() => {
    const sse = new EventSource('http://localhost:5000');

    sse.onmessage = function (event) {
      const newPlayer = JSON.parse(event.data);

      setResponse((currentPlayers) => [...currentPlayers, newPlayer]);
    };

    sse.onerror = function () {
      console.warn('An error occurred while getting the user');
      sse.close();
    };
  }, []);

  return (
    <Box borderRadius="10px" border="1px solid grey" bgColor={bg}>
      <Table
        size="lg"
        variant="simple"
        borderRadius="10px"
        width="500px"
      >
        <Thead>
          <Tr>
            <Th>
              <Flex gridGap="10px" align="center">
                <FaUserAlt />
                Player
              </Flex>
            </Th>
            <Th>
              <Flex gridGap="10px" align="center">
                <FaHashtag />
                Score
              </Flex>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {response.map((item, index) => (
            <Tr key={index}>
              <Td>
                {item.player}
              </Td>
              <Td>
                {item.score}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableComponent;
