import React from 'react';
import { Flex, Box } from 'grid-styled';

import Container from '../Container';
import Logo from '../Logo';
import Navigation from '../Navigation';

export default () => (
  <Container>
    <Flex align="center">
      <Box width={1/3}>
        <Logo />
      </Box>

      <Box width={2/3}>
        <Navigation />
      </Box>
    </Flex>
  </Container>
);
