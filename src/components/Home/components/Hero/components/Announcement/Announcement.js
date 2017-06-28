import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Text from 'components/Text';
import megaphone from './megaphone.png';

const Announcement = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
`;

const Icon = styled.img.attrs({
  src: megaphone,
})`
  width: ${rem(32)};
`;

export default () => (
  <Announcement>
    <Container>
      <Flex align="center">
        <Box mr={4}>
          <Icon />
        </Box>

        <Box>
          <Text color="white" fontSize={[1, 3]} heavy py={4} m={0}>
            <FormattedMessage id="home.hero.announcement" />
          </Text>
        </Box>
      </Flex>
    </Container>
  </Announcement>
);
