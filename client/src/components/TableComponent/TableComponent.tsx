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
  sortedItems: ResponseExample[];
  isSorted: boolean,
  sortHandler: () => void,
}

const TableComponent: React.FC<Props> = ({
  sortedItems,
  isSorted,
  sortHandler,
}) => {
  const colorOfBg = useColorModeValue('#d8d8d8', '#938f8f');

  return (
    <Box borderRadius="10px" border="1px solid grey" bgColor={colorOfBg}>
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
                {isSorted
                  ? (
                    <Button bgColor={colorOfBg} onClick={() => sortHandler()}>
                      <Flex gridGap="10px" align="center">
                        <FaHashtag />
                        Score
                        <FaArrowUp />
                      </Flex>
                    </Button>
                  )
                  : (
                    <Button bgColor={colorOfBg} onClick={() => sortHandler()}>
                      <Flex gridGap="10px" align="center">
                        <FaHashtag />
                        Score
                        <FaArrowDown />
                      </Flex>
                    </Button>
                  )}
              </Flex>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedItems.map((item, index) => (
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
