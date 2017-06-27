import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

import { SPACE } from 'config';
import Container from '../Container';
import Heading from '../Heading';
import Text from '../Text';
import Logo from '../Logo';

const Footer = styled.div`

`;

const List = styled.ul`
  list-style: none;
  margin: 0;
`;

const ListItem = styled.li`
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Languages = styled.div`
  list-style: none;
  margin: 0;


`;

const Language = styled.span`
  &:not(:first-of-type):before {
    content: ' · '
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;


const Email = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Footer>
    <Container>
      <Flex wrap my={[4, 8]} mx={-4}>
        <Box width={[1/2, 1/4]} my={2} px={4}>
          <Logo />

          <Text fontSize={[1, 2, 3]} color="gray.8" heavy mt={2}>
            <Email href="mailto:contact@skycoin.net">
              contact@skycoin.net
            </Email>
          </Text>

          <Text fontSize={[0, 0, 1]} color="gray.8" heavy mb={0}>
            <Languages>
              <Language><Link to="/">English</Link></Language>
              <Language><Link to="/cn">中文</Link></Language>
              <Language><Link to="/ru">Ру́сский</Link></Language>
            </Languages>
          </Text>
        </Box>

        <Box width={[1/2, 1/4]} my={2} px={4}>
          <Heading color="black" fontSize={3} heavy>Get started</Heading>
          <Text fontSize={[1, 2, 3]} color="gray.8" mb={0}>
            <List>
              <ListItem><Link to="/">Download wallet</Link></ListItem>
              <ListItem><Link to="/">Buy Skycoin</Link></ListItem>
              <ListItem><Link to="/">How it works</Link></ListItem>
              <ListItem><Link to="/">Quickstart guide</Link></ListItem>
            </List>
          </Text>
        </Box>

        <Box width={[1/2, 1/4]} my={2} px={4}>
          <Heading color="black" fontSize={3} heavy>Explore</Heading>
          <Text fontSize={[1, 2, 3]} color="gray.8" mb={0}>
            <List>
              <ListItem><Link to="/">Distribution</Link></ListItem>
              <ListItem><Link to="/">Whitepapers</Link></ListItem>
              <ListItem><Link to="/">Blockchain explorer</Link></ListItem>
              <ListItem><Link to="/">Roadmap</Link></ListItem>
            </List>
          </Text>
        </Box>

        <Box width={[1/2, 1/4]} my={2} px={4}>
          <Heading color="black" fontSize={3} heavy>Community</Heading>
          <Text fontSize={[1, 2, 3]} color="gray.8" mb={0}>
            <List>
              <ListItem><Link to="/">Blog</Link></ListItem>
              <ListItem><Link to="/">Github</Link></ListItem>
              <ListItem><Link to="/">Telegram</Link></ListItem>
              <ListItem><Link to="/">Slack</Link></ListItem>
            </List>
          </Text>
        </Box>
      </Flex>
    </Container>
  </Footer>
);
