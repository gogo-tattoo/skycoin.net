import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { COLORS, SPACE } from 'config';
import Container from 'components/Container';
import BuyButtons from 'components/BuyButtons';
import media from 'utils/media';

const BuyBanner = styled.div`
  background-color: ${COLORS.gray[1]};
  text-align: center;
  padding: ${rem(SPACE[4])} 0;

  ${media.md.css`
    padding: ${rem(SPACE[6])} 0;
  `}
`;

export default () => (
  <BuyBanner>
    <Container>
      <BuyButtons />
    </Container>
  </BuyBanner>
);
