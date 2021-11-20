import React from 'react';
import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Header = () => {
  const bg = useColorModeValue('#9cd39f', '#37753a');

  return (
    <Flex
      w="100%"
      justify="center"
      bgColor={bg}
      py="10px"
      flexShrink={0}
      border="1px solid"
      borderColor="grey"
      borderBottomRadius="10px"
    >
      <Flex
        w="70%"
        justify="space-between"
        py="30px"
      >
        <Heading colorScheme="brand.100">
          Player&apos;s scores
        </Heading>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Flex>
  );
};

export default Header;
