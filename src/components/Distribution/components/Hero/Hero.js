import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import moment from 'moment';

import { DISTRIBUTION_START, DISTRIBUTION_END } from 'config';
import { preEvent, postEvent, eventInProgress } from 'components/Distribution/eventStatus';
import media from 'utils/media';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Button from 'components/Button';

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
    height: ${postEvent ? '26rem' : '38rem'};
  `}

  ${media.md.css`
    height: ${postEvent ? '30rem' : '42rem'};
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
        <Flex wrap justify="center">
          <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
            <Container>
              <Heading heavy as="h1" color="white" fontSize={[5, 7, 8]} mb={0}>
                <FormattedMessage id="distribution.hero.heading" />
              </Heading>
            </Container>
          </Box>

          <Box width={[1 / 1, 1 / 1, 2 / 3]} mb={[5, 7]}>
            {!postEvent && <Countdown />}

            {eventInProgress && <Button
              href="https://distribution.skycoin.net/"
              color="violet.5"
              bg="white"
              big
              fontSize={[1, 3]}
              mt={[5, 7]}
            >
              <FormattedMessage id="distribution.hero.participate" /> &rarr;
            </Button>}

            {postEvent && (
              <Text fontSize={[3, 3, 4]} color="white" heavy mb={[5, 7]}>
                <FormattedHTMLMessage
                  id="distribution.hero.postEvent"
                  values={{
                    date: moment(DISTRIBUTION_END).format('LL'),
                  }}
                />
              </Text>
            )}

            {preEvent && (
              <div>
                <Text fontSize={[3, 3, 4]} color="white" heavy mt={[5, 7]} mb={0}>
                  <FormattedHTMLMessage
                    id="distribution.hero.preEvent"
                    values={{
                      begin: moment(DISTRIBUTION_START).format('LL'),
                      end: moment(DISTRIBUTION_END).format('LL'),
                    }}
                  />
                </Text>
              </div>
            )}
          </Box>
        </Flex>
      </Container>
    </StyledFlex>
  </Hero>
);
