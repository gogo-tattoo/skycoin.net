import React from 'react';
import styled from 'styled-components';

import media from 'utils/media';
import { COLORS } from 'config';

import TimelineItem from '../TimelineItem';
import content from './content';

const Timeline = styled.div`
  overflow: hidden;
  border-left: 2px solid ${COLORS.gray[1]};
  height: 100%;

  &:before {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${COLORS.gray[1]};
    position: absolute;
    left: 0;

    ${media.sm.css`
      display: none;
    `}
  }
`;

export default () => (
  <Timeline>
    {content.map((props, i) => <TimelineItem key={i} {...props} />)}
  </Timeline>
);
