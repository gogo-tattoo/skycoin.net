import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import media from 'utils/media';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Countdown from '../Countdown';
import background from './background.png';

const Hero = styled.div`
  background:
    url(${background}) center center / cover,
    linear-gradient(-155deg, #686e96 0%, #373b5c 100%);
  ;
  position: relative;
  text-align: center;

  ${media.sm.css`
    height: 38rem;
  `}

  ${media.md.css`
    height: 42rem;
  `}
`;

const StyledFlex = styled(Flex)`
  height: 100%;
  z-index: 1;
`;

export default () => (
  <Hero>
    <StyledFlex column justify="center">
      <Container>
        <Flex column align="center">
          <Box width={[1 / 1, 1 / 1, 2 / 3]}>
            <Container>
              <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} my={[5, 7]}>
                <FormattedMessage id="distribution.hero.heading" />
              </Heading>
            </Container>
          </Box>

          <Box width={[1 / 1, 1 / 1, 2 / 3]}>
            <Countdown />

            <Text fontSize={[3, 3, 4]} color="white" heavy my={[5, 7]}>
              <FormattedMessage id="distribution.hero.lead" />
            </Text>

            <Text fontSize={[3, 3, 4]} color="white" heavy mb={[5, 7]}>
              <FormattedHTMLMessage id="distribution.hero.body" />
            </Text>
          </Box>
        </Flex>
      </Container>
    </StyledFlex>
  </Hero>
);
