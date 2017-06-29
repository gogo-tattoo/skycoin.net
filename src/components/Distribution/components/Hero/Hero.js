import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import media from 'utils/media';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';

const Hero = styled.div`
  background-image: linear-gradient(-155deg, #686e96 0%, #373b5c 100%);
  position: relative;
  height: 30rem;
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
          <Box width={[1 / 1, 2 / 3]}>
            <Container>
              <Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={7}>
                Coin Distribution
              </Heading>
            </Container>
          </Box>

          <Box width={[1 / 1, 2 / 3]}>
            <Text fontSize={[3, 3, 4]} color="white" heavy mb={[5, 7]}>
              As coins aren’t mined, Skycoin distribution is unlike that of a standard token or asset. To ensure continued development in a project that will take many years to complete coins are released in a scheme similar to that of a standard company, with the first batches going to early developers and investors.
            </Text>

            <Text fontSize={[3, 3, 4]} color="white" heavy mb={[5, 7]}>
              Each week we will distribute <strong>1000</strong> coins.
            </Text>
          </Box>
        </Flex>
      </Container>
    </StyledFlex>
  </Hero>
);
