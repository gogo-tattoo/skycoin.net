import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import Hide from 'hidden-styled'

import { COLORS } from 'config';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Button from 'components/Button';
import Container from 'components/Container';
import Label from 'components/Label';
import distribution from './distribution.png';

const Distribution = styled.div`
  background-image: linear-gradient(-155deg, #686e96 0%, #373b5c 100%);
`;

const Graphic = styled.div`
  height: 100%;
  width: 100%;
  background: url(${distribution}) center center / 100% auto no-repeat;
  display: block;
`;

export default () => (
  <Distribution>
    <Container>
      <Flex>
        <Box width={[0, 1/3]} mr={[0, 4]}>
          <Graphic />
        </Box>

        <Box width={[1/1, 2/3]} py={[7, 9]}>
          <Label>Digging deeper</Label>

          <Heading heavy as="h2" my={[4, 5]} fontSize={[5, 6]} color="white">
            Distribution
          </Heading>

          <Text fontSize={[3, 3, 4]} mb={[4, 5]} color="white" heavy>
            As coins aren’t mined, Skycoin distribution is unlike that of a standard token or asset. To ensure continued development, coins are awarded and distributed to contributors, developers and investors and sold on exchanges like C2CX and Cryptopia. In the coming months, 20% of coins will be auctioned/ICO’ed.
          </Text>

          <Text fontSize={[3, 3, 4]} mb={0} heavy color="white">
            <Link to="/">
              Learn about distribution
            </Link>
          </Text>
        </Box>
      </Flex>
    </Container>
  </Distribution>
);
