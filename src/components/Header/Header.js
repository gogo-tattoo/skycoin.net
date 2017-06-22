import React from 'react';
import { Flex, Box } from 'grid-styled';

import Container from '../Container';
import Logo from '../Logo';
import Navigation from '../Navigation';

export default () => (
  <Container>
    <Flex>
      <Box>
        <Logo />
      </Box>

      <Box>
        <Navigation />
      </Box>
    </Flex>
  </Container>
);
