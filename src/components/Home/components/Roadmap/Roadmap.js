import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';

import Text from 'components/Text';
import Heading from 'components/Heading';
import Button from 'components/Button';
import Container from 'components/Container';
import Divider from 'components/Divider';

import Timeline from './components/Timeline';
import community from './community.png';

const Icon = styled.img.attrs({
  src: community,
})`
  width: ${rem(60)};
`;

export default () => (
  <Container>
    <Flex wrap >
      <Box width={[1 / 1, 1 / 2]} pr={[0, 4, 4]}>
        <Box width={[1 / 1, 1 / 1, 5 / 6]} pt={[0, 0, 7]}>
          <Heading heavy as="h2" my={[4, 5]} fontSize={[5, 6]} color="black">
            <FormattedMessage id="home.roadmap.heading" />
          </Heading>

          <Text heavy mb={[3, 4]} fontSize={[2, 2, 3]} color="black">
            <FormattedMessage id="home.roadmap.blurb" />
          </Text>

          <Text heavy mb={0} fontSize={[2, 2, 3]} color="base">
            <Link to="/">
              <FormattedMessage id="home.roadmap.roadmapLink" />
            </Link>
          </Text>

          <Divider />
          <Icon />

          <Text heavy fontSize={[2, 2, 3]} my={[3, 4]} color="black">
            <FormattedMessage id="home.roadmap.community" />
          </Text>

          <Button color="base" mb={[4, 5]} outlined big fontSize={[1, 3]}>
            <FormattedMessage id="home.roadmap.communityLink" />
          </Button>
        </Box>
      </Box>

      <Box width={[1 / 1, 1 / 2]}>
        <Timeline />
      </Box>
    </Flex>
  </Container>
);
