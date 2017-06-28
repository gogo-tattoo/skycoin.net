import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Label from 'components/Label';
import Text from 'components/Text';

import distribution from './distribution.png';

// TODO: update gradient to use global colors
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
        <Box width={[0, 1 / 3]} mr={[0, 4]}>
          <Graphic />
        </Box>

        <Box width={[1 / 1, 2 / 3]} py={[7, 9]}>
          <Label>
            <FormattedMessage id="home.distribution.label" />
          </Label>

          <Heading heavy as="h2" my={[4, 5]} fontSize={[5, 6]} color="white">
            <FormattedMessage id="home.distribution.heading" />
          </Heading>

          <Text fontSize={[3, 3, 4]} mb={[4, 5]} color="white" heavy>
            <FormattedMessage id="home.distribution.body" />
          </Text>

          <Text fontSize={[3, 3, 4]} mb={0} heavy color="white">
            <Link to="/">
              <FormattedMessage id="home.distribution.link" />
            </Link>
          </Text>
        </Box>
      </Flex>
    </Container>
  </Distribution>
);
