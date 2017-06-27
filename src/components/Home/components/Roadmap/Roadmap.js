import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import { rem } from 'polished';

import { SPACE } from 'config';
import media from 'utils/media';
import Text from 'components/Text';
import Heading from 'components/Heading';
import Button from 'components/Button';
import Container from 'components/Container';
import community from './community.png';

const Timeline = styled.div`
  overflow: hidden;
  border-left: 2px solid #E6E6E6;
  height: 100%;

  &:before {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background-color: #E6E6E6;
    position: absolute;
    left: 0;

    ${media.sm.css`
      display: none;
    `}
  }
`;

const TimelineItem = styled.div`
  overflow: hidden;

  margin: ${rem(SPACE[5])} 0;

  ${media.md.css`
    margin: ${rem(SPACE[7])} 0;
  `}
`;

const Divider = styled.div`
  width: 150px;
  height: 4px;
  background-color: #E6E6E6;

  margin: ${rem(SPACE[5])} 0;

  ${media.md.css`
    margin: ${rem(SPACE[9])} 0;
  `}
`;

const Icon = styled.img.attrs({
  src: community,
})`
  width: 60px;
`;

const Marker = styled.span`
  display: inline-block;
  margin-right: 10px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 1000px;
  border: 2px solid #E6E6E6;
  background-color: white;

  ${media.md.css`
    height: 50px;
    width: 50px;
    line-height: 50px;
  `}
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #E6E6E6;
  margin-top: 25px;
`

export default () => (
  <Container>
    <Flex wrap >
      <Box width={[1/1, 1/2]} pr={[0, 4, 4]}>
        <Box width={[1/1, 1/1, 5/6]} pt={[0, 0, 7]}>
          <Heading heavy as="h2" my={[4, 5]} fontSize={[5, 6]} color="black">
            Roadmap
          </Heading>
          <Text heavy mb={[3, 4]} fontSize={[2, 2, 3]} color="black">
            Development can be followed and contributed to on GitHub. We will be opening bounties for bug fixes, design and development in the coming months.
          </Text>
          <Text heavy mb={0} fontSize={[2, 2, 3]} color="base"><Link to="/">See the full roadmap</Link></Text>

          <Divider />

          <Icon />
          <Text heavy fontSize={[2, 2, 3]} my={[3, 4]} color="black">
            Join Skycoin on Telegram to start contributing, and keep up-to-date with the latest developments.
          </Text>
          <Button color="base" mb={[4, 5]} outlined big fontSize={[1, 3]}>
            Join the community
          </Button>
        </Box>
      </Box>

      <Box width={[1/1, 1/2]}>
        <Timeline>
          <TimelineItem>
            <Flex wrap justify="left" align="top">
              <Box width={[1/6]}>
                <Line />
              </Box>
              <Box width={[5/6, 5/6, 4/6]}>
                <Heading as="span" fontSize={[3, 4]} color="gray.7">
                  <Marker>Q3</Marker>
                </Heading>

                <Heading as="span" fontSize={[1, 2]} color="gray.7">
                  FY17
                </Heading>

                <Text fontSize={[2, 2, 3]} color="gray.8" mt={[4, 4, 6]} mb={0}>
                  Coin distribution sale: 20% of coins to be distributed by auction and ICO.
                </Text>
              </Box>
            </Flex>
          </TimelineItem>

          <TimelineItem>
            <Flex wrap justify="left" align="top">
              <Box width={[1/6]}>
                <Line />
              </Box>
              <Box width={[5/6, 5/6, 4/6]}>
                <Heading as="span" fontSize={[3, 4]} color="gray.7">
                  <Marker>Q4</Marker>
                </Heading>

                <Heading as="span" fontSize={[1, 2]} color="gray.7">
                  FY17
                </Heading>

                <Text fontSize={[2, 2, 3]} color="gray.8" mt={[4, 4, 6]} mb={0}>
                  Launch of the first downloadable network node, users will be able to earn coins for powering the network.
                </Text>
              </Box>
            </Flex>
          </TimelineItem>

          <TimelineItem>
            <Flex wrap justify="left" align="top">
              <Box width={[1/6]}>
                <Line />
              </Box>
              <Box width={[5/6, 5/6, 4/6]}>
                <Heading as="span" fontSize={[3, 4]} color="gray.7">
                  <Marker>Q1</Marker>
                </Heading>

                <Heading as="span" fontSize={[1, 2]} color="gray.7">
                  FY18
                </Heading>

                <Text fontSize={[2, 2, 3]} color="gray.8" mt={[4, 4, 6]} mb={0}>
                  The launch of our first applications on the Skywire Network: a decentralised, Redditesque, social media platform and VPN service.
                </Text>
              </Box>
            </Flex>
          </TimelineItem>
        </Timeline>
      </Box>
    </Flex>
  </Container>
);
