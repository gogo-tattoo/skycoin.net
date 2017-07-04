import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { Flag } from 'flag';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Link from 'components/Link';
import Label from 'components/Label';
import Text from 'components/Text';

import network from './network.png';

const Graphic = styled.img.attrs({
  src: network,
})`
  max-width: 100%;
`;

export default () => (
  <div>
    <Container>
      <Flex py={[7, 9]} align="center">
        <Box width={[1 / 1, 2 / 3]}>
          <Label>
            <FormattedMessage id="home.network.label" />
          </Label>

          <Heading heavy as="h2" my={[4, 5]} fontSize={[5, 6]} color="black">
            <FormattedMessage id="home.network.heading" />
          </Heading>

          <Text fontSize={[3, 3, 4]} mb={[4, 5]} color="black" heavy>
            <FormattedMessage id="home.network.body" />
          </Text>

          <Flag
            name="network"
            render={() => (
              <Text fontSize={[3, 3, 4]} mb={0} heavy color="base">
                <Link href="infographics.html">
                  <FormattedMessage id="home.network.link" />
                </Link>
              </Text>
            )}
          />
        </Box>

        <Box width={[0, 1 / 3]} ml={[0, 4]}>
          <Graphic />
        </Box>
      </Flex>
    </Container>
  </div>
);
