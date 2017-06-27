import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import Hide from 'hidden-styled'
import { rem } from 'polished';

import { COLORS } from 'config';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Button from 'components/Button';
import Container from 'components/Container';
import Label from 'components/Label';
import network from './network.png';

const Network = styled.div`
`;

const Graphic = styled.img.attrs({
  src: network
})`
  max-width: 100%;
`;

export default () => (
  <Network>
    <Container>
      <Flex py={[7, 9]} align="center">
        <Box width={[1/1, 2/3]}>
          <Label>Digging deeper</Label>

          <Heading heavy as="h2" my={[4, 5]} fontSize={[5, 6]} color="black">
            Network concensus
          </Heading>

          <Text fontSize={[3, 3, 4]} mb={[4, 5]} color="black" heavy>
            Mining represents one of the biggest flaws to crypto assets by centralising large amounts of power into a handful of mining pools. Mining costs cryptocurrency networks tens of millions of dollars every month in electricity costs, processing just seven transactions a second. Skycoin uses a new consensus algorithm, Network Consensus, which requires no mining.
          </Text>

          <Text fontSize={[3, 3, 4]} mb={0} heavy color="base">
            <Link to="/">
              Learn about distribution
            </Link>
          </Text>
        </Box>

        <Box width={[0, 1/3]} ml={[0, 4]}>
          <Graphic />
        </Box>
      </Flex>
    </Container>
  </Network>
);
