import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';

import Text from 'components/Text';
import Heading from 'components/Heading';
import media from 'utils/media';
import { SPACE, COLORS, BORDER_RADIUS } from 'config';

const Wrapper = styled.div`
  overflow: hidden;
  margin: ${rem(SPACE[5])} 0;

  ${media.md.css`
    margin: ${rem(SPACE[7])} 0;
  `}
`;

const Marker = styled.span`
  display: inline-block;
  margin-right: ${rem(SPACE[3])};
  height: ${rem(40)};
  width: ${rem(40)};
  line-height: ${rem(40)};
  text-align: center;
  border-radius: ${BORDER_RADIUS.pill};
  border: 2px solid ${COLORS.gray[1]};
  background-color: white;

  ${media.md.css`
    height: ${rem(50)};
    width: ${rem(50)};
    line-height: ${rem(50)};
  `}
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${COLORS.gray[1]};
  margin-top: ${rem(20)};

  ${media.md.css`
    margin-top: ${rem(25)};
  `}
`;

const TimelineItem = ({ quarter, year, content }) => (
  <Wrapper>
    <Flex wrap justify="left" align="top">
      <Box width={[1 / 6]}>
        <Line />
      </Box>

      <Box width={[5 / 6, 5 / 6, 4 / 6]}>
        <Heading as="span" fontSize={[3, 4]} color="gray.7">
          <Marker><FormattedMessage id={quarter} /></Marker>
        </Heading>

        <Heading as="span" fontSize={[1, 2]} color="gray.7">
          <FormattedMessage id={year} />
        </Heading>

        <Text fontSize={[2, 2, 3]} color="gray.8" mt={[4, 4, 6]} mb={0}>
          <FormattedMessage id={content} />
        </Text>
      </Box>
    </Flex>
  </Wrapper>
);

TimelineItem.propTypes = {
  quarter: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TimelineItem;
