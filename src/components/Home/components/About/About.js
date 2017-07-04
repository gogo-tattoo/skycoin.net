import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';

import { COLORS } from 'config';
import Button from 'components/Button';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';

import Feature from './components/Feature';
import features from './content';
import background from './background.png';

// TODO: update background image to use global colors
const About = styled.div`
  background: url(${background}) repeat-x top center / ${rem(48)} #f7f7f7;
  border-bottom: 2px solid ${COLORS.gray[2]};
`;

export default () => (
  <About>
    <Container>
      <Box width={[1 / 1, 1 / 1, 2 / 3]} mb={[8, 11]} pt={[7, 10]}>
        <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
          <FormattedMessage id="home.about.heading" />
        </Heading>

        <Text fontSize={[3, 3, 4]} color="black" heavy mb={[5, 7]}>
          <FormattedMessage id="home.about.lead" />
        </Text>

        <Button to="downloads" color="white" bg="base" big fontSize={[1, 3]}>
          <FormattedMessage id="home.about.whitepaper" />
        </Button>
      </Box>

      <Flex wrap>
        {features.map(({ heading, body, icon }, index) => (
          <Box width={[1 / 1, 1 / 2]} mb={[2, 6]} key={index}>
            <Feature heading={heading} body={body} icon={icon} />
          </Box>
        ))}
      </Flex>
    </Container>
  </About>
);
