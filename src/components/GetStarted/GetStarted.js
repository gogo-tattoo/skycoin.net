import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Flex, Box } from 'grid-styled';

import { COLORS } from 'config';
import Button from 'components/Button';
import Buy from 'components/Buy';
import Container from 'components/Container';
import Heading from 'components/Heading';
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
        <Box width={[1 / 1, 1 / 1, 1 / 2]}>
          <Heading heavy as="h2" fontSize={[4, 5, 6]} mb={[6, 6, 0]} color="black">
            <FormattedMessage id="getStarted.heading" />
          </Heading>
        </Box>

        <Box width={[1 / 1, 1 / 1, 1 / 2]}>
          <Buttons>
            <Buy color="white" bg="violet.5" big fontSize={[1, 3]}>
              <FormattedMessage id="getStarted.buy" />
            </Buy>

            <Button color="violet.5" outlined ml={[2, 5]} big fontSize={[1, 3]}>
              <FormattedMessage id="getStarted.wallet" />
            </Button>
          </Buttons>
        </Box>
      </Flex>
    </Container>
  </GetStarted>
);
