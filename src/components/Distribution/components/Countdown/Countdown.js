import React from 'react';
import padStart from 'lodash/padStart';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import media from 'utils/media';
import { BOX_SHADOWS, BORDER_RADIUS, COLORS } from 'config';
import Heading from 'components/Heading';
import Text from 'components/Text';

const COUNTDOWN_TARGET = new Date('2017-08-01T04:00:00.000Z');

const getDays = t => Math.floor(t / (1000 * 60 * 60 * 24));
const getHours = t => Math.floor((t / (1000 * 60 * 60)) % 24);
const getMinutes = t => Math.floor((t / 1000 / 60) % 60);
const getSeconds = t => Math.floor((t / 1000) % 60);

const display = t => padStart(t, 2, 0).split('');

const Wrapper = styled.div`
  margin: 0 auto;
  background: white;
  border-radius: ${BORDER_RADIUS.base};
  box-shadow: ${BOX_SHADOWS.base};
  padding: 1rem 0.5rem;
  max-width: 350px;

  ${media.sm.css`
    max-width: 550px;
    padding: 1.5rem 1rem;
  `}

  ${media.md.css`
    max-width: none;
    padding: 2rem 1.5rem;
  `}
`;

// TODO: make this a styled span
const Digit = styled(Heading).attrs({
  fontSize: [5, 8, 9],
  color: 'base',
  bg: COLORS.gray[0],
  as: 'span',
})`
  display: inline-block;
  border-radius: ${BORDER_RADIUS.base};
  box-shadow: ${BOX_SHADOWS.base};
  width: 25px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 0 2px;

  ${media.sm.css`
    width: 50px;
    height: 70px;
    line-height: 70px;
    margin: 0 4px;
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
          The next distribution will begin on <strong>31st&nbsp;June&nbsp;2017</strong>.
        </Text>

        <Flex>
          <Box width={1/4}>
            <Text fontSize={[0]} mb={1} heavy caps color="gray.8">Days</Text>
            {display(getDays(remaining)).map(i => (
              <Digit>{i}</Digit>
            ))}
          </Box>

          <Box width={1/4}>
            <Text fontSize={[0]} mb={1} heavy caps color="gray.8">Hours</Text>
            {display(getHours(remaining)).map(i => (
              <Digit>{i}</Digit>
            ))}
          </Box>

          <Box width={1/4}>
            <Text fontSize={[0]} mb={1} heavy caps color="gray.8">Minutes</Text>
            {display(getMinutes(remaining)).map(i => (
              <Digit>{i}</Digit>
            ))}
          </Box>

          <Box width={1/4}>
            <Text fontSize={[0]} mb={1} heavy caps color="gray.8">Seconds</Text>
            {display(getSeconds(remaining)).map(i => (
              <Digit>{i}</Digit>
            ))}
          </Box>
        </Flex>
      </Wrapper>
    );
  }
}
