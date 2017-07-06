import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';

import { COLORS } from 'config';
import Button from 'components/Button';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';

import background from './background.png';

// TODO: update background image to use global colors
const About = styled.div`
  background: url(${background}) repeat-x top center / ${rem(48)} #f7f7f7;
  border-bottom: 2px solid ${COLORS.gray[2]};
`;

export default () => (
  <About>
    <Container>
      <Box py={[7, 8]}>
        <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
          <FormattedMessage id="home.about.heading" />
        </Heading>

        <Text fontSize={[3, 3, 4]} color="black" heavy mb={[5, 7]}>
          <FormattedMessage id="home.about.lead" />
        </Text>

        <Button to="downloads#whitepapers" color="white" bg="base" big fontSize={[1, 3]}>
          <FormattedMessage id="home.about.whitepaper" />
        </Button>
      </Box>
    </Container>
  </About>
);
