import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';

import { SPACE } from 'config';
import Container from '../Container';
import Logo from '../Logo';
import Navigation from './components/Navigation';

const Header = styled.div`
  padding: ${rem(SPACE[6])} 0;
  width: 100%;
`;

export default () => (
  <Header>
    <Container>
      <Flex align="center" wrap>
        <Box width={[1/1, 1/3]}>
          <Logo />
        </Box>

        <Box width={[1/1, 2/3]}>
          <Navigation />
        </Box>
      </Flex>
    </Container>
  </Header>
);
