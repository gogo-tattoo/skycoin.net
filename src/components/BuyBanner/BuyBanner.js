import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';

import { COLORS, SPACE } from 'config';
import Text from 'components/Text';
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
      <Text heavy black fontSize={3}>
        <FormattedMessage id="buyBanner.lead" />
      </Text>

      <BuyButtons />
    </Container>
  </BuyBanner>
);
