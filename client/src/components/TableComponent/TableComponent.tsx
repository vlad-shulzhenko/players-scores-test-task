import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaUserAlt,
  FaHashtag,
  FaArrowUp,
  FaArrowDown,
} from 'react-icons/fa';
import { ResponseExample } from '../../types/ResponseExample';

type Props = {
  response: ResponseExample[];
  sorted: boolean,
  sortHandler: () => void,
}

const TableComponent: React.FC<Props> = ({
  response,
  sorted,
  sortHandler,
}) => {
  const bg = useColorModeValue('#d8d8d8', '#938f8f');

  return (
    <Box borderRadius="10px" border="1px solid grey" bgColor={bg}>
      <Table
        size="lg"
        variant="striped"
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
                {sorted
                  ? (
                    <Button bgColor={bg} onClick={() => sortHandler()}>
                      <FaArrowUp />
                    </Button>
                  )
                  : (
                    <Button bgColor={bg} onClick={() => sortHandler()}>
                      <FaArrowDown />
                    </Button>
                  )}
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
