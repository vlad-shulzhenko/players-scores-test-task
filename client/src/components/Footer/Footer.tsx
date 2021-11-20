import React from 'react';
import {
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  const bg = useColorModeValue('#9cd39f', '#37753a');

  // @ts-ignore
  return (
    <Flex
      w="100%"
      justify="center"
      bgColor={bg}
      h="120px"
      flexShrink={0}
      border="1px solid"
      borderColor="grey"
      borderTopRadius="10px"
    >
      <Flex
        w="70%"
        direction="column"
        align="center"
        py="30px"
      >
        <Heading colorScheme="brand.100">
          Player&apos;s scores
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Footer;
