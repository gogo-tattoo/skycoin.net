import React from 'react';
import padStart from 'lodash/padStart';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { rem } from 'polished';

import media from 'utils/media';
import { BOX_SHADOWS, BORDER_RADIUS, COLORS, SPACE } from 'config';
import Heading from 'components/Heading';
import Text from 'components/Text';

const COUNTDOWN_TARGET = new Date('2017-08-01T04:00:00.000Z');

const getDays = t => Math.floor(t / (1000 * 60 * 60 * 24));
const getHours = t => Math.floor((t / (1000 * 60 * 60)) % 24);
const getMinutes = t => Math.floor((t / 1000 / 60) % 60);
const getSeconds = t => Math.floor((t / 1000) % 60);

const formatTime = t => padStart(t, 2, 0).split('');

const Wrapper = styled.div`
  margin: 0 auto;
  background: white;
  border-radius: ${BORDER_RADIUS.base};
  box-shadow: ${BOX_SHADOWS.base};
  padding: ${rem(SPACE[4])} ${rem(SPACE[2])};
  max-width: ${rem(350)};

  ${media.sm.css`
    max-width: ${rem(550)};
    padding: ${rem(SPACE[6])} ${rem(SPACE[4])};
  `}

  ${media.md.css`
    max-width: none;
    padding: ${rem(SPACE[7])} ${rem(SPACE[6])};
  `}
`;

const Digit = styled(Heading).attrs({
  fontSize: [5, 8, 9],
  color: 'base',
  bg: COLORS.gray[0],
  as: 'span',
})`
  display: inline-block;
  border-radius: ${BORDER_RADIUS.base};
  box-shadow: ${BOX_SHADOWS.base};
  width: ${rem(25)};
  height: ${rem(40)};
  line-height: ${rem(40)};
  text-align: center;
  margin: 0 ${rem(2)};

  ${media.sm.css`
    width: ${rem(50)};
    height: ${rem(75)};
    line-height: ${rem(75)};
    margin: 0 ${rem(SPACE[1])};
  `}
`;

export default class Countdown extends React.Component {
  constructor() {
    super();

    this.state = {
      secondsRemaining: COUNTDOWN_TARGET.getTime() - Date.now(),
    };
  }

  componentWillMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1000,
    });

    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    const remaining = new Date(this.state.secondsRemaining);

    if (remaining < 0) {
      return null;
    }

    return (
      <Wrapper>
        <Text fontSize={[1, 4]} color="black" heavy mb={[5, 7]}>
          <FormattedHTMLMessage id="distribution.countdown.heading" />
        </Text>

        <Flex>
          <Box width={1 / 4}>
            <Text fontSize={[0]} mb={1} heavy caps color="gray.8">
              <FormattedMessage id="distribution.countdown.days" />
            </Text>

            {formatTime(getDays(remaining)).map(i => <Digit>{i}</Digit>)}
          </Box>

          <Box width={1 / 4}>
            <Text fontSize={[0]} mb={1} heavy caps color="gray.8">
              <FormattedMessage id="distribution.countdown.hours" />
            </Text>

            {formatTime(getHours(remaining)).map(i => <Digit>{i}</Digit>)}
          </Box>

          <Box width={1 / 4}>
            <Text fontSize={[0]} mb={1} heavy caps color="gray.8">
              <FormattedMessage id="distribution.countdown.minutes" />
            </Text>

            {formatTime(getMinutes(remaining)).map(i => <Digit>{i}</Digit>)}
          </Box>

          <Box width={1 / 4}>
            <Text fontSize={[0]} mb={1} heavy caps color="gray.8">
              <FormattedMessage id="distribution.countdown.seconds" />
            </Text>

            {formatTime(getSeconds(remaining)).map(i => <Digit>{i}</Digit>)}
          </Box>
        </Flex>
      </Wrapper>
    );
  }
}
