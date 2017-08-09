import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Button from 'components/Button';
import Text from 'components/Text';

import distribution from './distribution.png';

// TODO: update gradient to use global colors
const Wrapper = styled.div`
  background-image: linear-gradient(-155deg, #686e96 0%, #373b5c 100%);
`;

const Graphic = styled.div`
  height: 100%;
  width: 100%;
  background: url(${distribution}) center center / 100% auto no-repeat;
  display: block;
`;

export default () => (
  <Wrapper>
    <Container>
      <Flex>
        <Box width={[0, 1 / 3]} mr={[0, 4]}>
          <Graphic />
        </Box>

        <Box width={[1 / 1, 2 / 3]} py={[7, 8]}>
          <Heading heavy as="h2" mb={[4, 5]} fontSize={[5, 6]} color="white">
            <FormattedMessage id="home.distributionEvent.heading" />
          </Heading>

          <Text fontSize={[3, 3, 4]} mb={[5, 7]} color="white" heavy>
            <FormattedMessage id="home.distributionEvent.body" />
          </Text>

          <Button
            href="https://event.skycoin.net/"
            color="violet.5"
            bg="white"
            big
            fontSize={[1, 3]}
          >
            <FormattedMessage id="home.distributionEvent.participate" /> &rarr;
          </Button>
        </Box>
      </Flex>
    </Container>
  </Wrapper>
);
