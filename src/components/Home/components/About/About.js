import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import { COLORS } from 'config';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Button from 'components/Button';
import Container from 'components/Container';
import * as icons from './icons';
import background from './background.png';

const About = styled.div`
  background: url(${background}) repeat-x top center / 48px #f7f7f7;
  border-bottom: 2px solid ${COLORS.gray[2]};
`;

const FEATURES = [{
  heading: 'Speed',
  body: 'We built Skycoin to compete with credit cards and services like AliPay/Apple Pay. Transactions happen in seconds, not minutes.',
  icon: 'rabbit',
}, {
  heading: 'Privacy',
  body: 'Skycoin makes it impossible to trace transactions by mixing transactions from multiple wallets to increase privacy using the CoinJoin protocol.',
  icon: 'fingerprint',
}, {
  heading: 'Security',
  body: 'Skycoin is more secure because it does not rely upon the good will of miners, it cannot be 51% attacked.',
  icon: 'lock',
}, {
  heading: 'Ecosystem',
  body: 'We’re building a rich ecosystem of real world applications on top of Skycoin starting with messaging, social media, and VPN.',
  icon: 'list',
}];

const Icon = styled.img`
  height: 60px;
  width: 100%;
  object-fit: contain;
`;

export default () => (
  <About>
    <Container>
      <Box width={[1/1, 1/1, 2/3]} mb={[8, 11]} pt={[7, 10]}>
        <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
          <FormattedMessage id="home.about.heading" />
        </Heading>

        <Text fontSize={[3, 3, 4]} color="black" heavy mb={[5, 7]}>
          <FormattedMessage id="home.about.lead" />
        </Text>

        <Button color="white" bg="base" big fontSize={[1, 3]}>
          Read the whitepaper
        </Button>
      </Box>

      <Flex wrap>
        {FEATURES.map(({ heading, body, icon }) => (
          <Box width={[1/1, 1/2]} mb={[2, 6]}>
            <Flex>
              <Box width={[1/4, 1/6]}>
                <Icon src={icons[icon]} />
              </Box>

              <Box width={[3/4, 4/6]} ml={[2, 4]}>
                <Heading as="h3" fontSize={[3, 5]} color="black">
                  {heading}
                </Heading>

                <Text fontSize={[2, 3]} color="gray.9">
                  {body}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Container>
  </About>
);
