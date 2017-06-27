import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { COLORS } from 'config';
import Heading from 'components/Heading';
import Button from 'components/Button';
import Container from 'components/Container';
import media from 'utils/media';

const GetStarted = styled.div`
  background-color: ${COLORS.gray[1]};
  text-align: center;

  ${media.md.css`
    text-align: left;
  `}
`;

const Buttons = styled.div`
  ${media.md.css`
    text-align: right;
  `}
`;

export default () => (
  <GetStarted>
    <Container>
      <Flex align="center" py={[6, 6, 10]} wrap>
        <Box width={[1/1, 1/1, 1/2]}>
          <Heading heavy as="h2" fontSize={[4, 5, 6]} mb={[6, 6, 0]} color="black">
            Get started with Skycoin
          </Heading>
        </Box>

        <Box width={[1/1, 1/1, 1/2]}>
          <Buttons>
            <Button color="white" bg="violet.5" big fontSize={[1, 3]}>
              Buy Skycoin
            </Button>

            <Button color="violet.5" outlined ml={[2, 5]} big fontSize={[1, 3]}>
              Get Wallet
            </Button>
          </Buttons>
        </Box>
      </Flex>
    </Container>
  </GetStarted>
);
