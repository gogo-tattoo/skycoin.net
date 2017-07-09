import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Label from 'components/Label';

import miner from './miner.png';
import background from './background.png';

// TODO: update gradient to use global colors
const Miner = styled.div`
  background:
    url(${background}) center center / cover,
    linear-gradient(-155deg, #686e96 0%, #373b5c 100%);
`;

const Graphic = styled.img.attrs({
  src: miner,
})`
  display: block;
  max-width: 100%;
`;

export default () => (
  <Miner>
    <Container>
      <Flex py={[7, 8]} align="center">
        <Box width={[1 / 3, 1 / 4]} mr={[4, 6]}>
          <Graphic />
        </Box>

        <Box width={[2 / 3, 3 / 4]}>
          <Label>
            <FormattedMessage id="home.miner.label" />
          </Label>

          <Heading heavy as="h2" mt={[4, 5]} mb={0} fontSize={[5, 6]} color="white">
            <FormattedMessage id="home.miner.heading" />
          </Heading>
        </Box>
      </Flex>
    </Container>
  </Miner>
);
