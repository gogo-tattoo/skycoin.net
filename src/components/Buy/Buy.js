import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';

import { BOX_SHADOWS, SPACE, BORDER_RADIUS } from 'config';
import Button from '../Button';
import BuyButtons from '../BuyButtons';
import Text from '../Text';

const styles = { overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' } };

const animateIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Wrapper = styled.div`
  display: inline;
`;

const StyledModal = styled(Modal)`
  animation: 150ms ${animateIn} ease-in-out;
  padding: ${rem(SPACE[6])};
  background: white;
  outline: none;
  border-radius: ${BORDER_RADIUS.base};
  box-shadow: ${BOX_SHADOWS.base};
  max-width: calc(100vw - 5rem);
  width: ${rem(600)};
  text-align: center;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
`;

class Buy extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { asAnchor, ...rest } = this.props;
    const Component = asAnchor ? 'a' : Button;

    return (
      <Wrapper>
        <Component onClick={this.openModal} {...rest} />
        <StyledModal
          style={styles}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <Text fontSize={[2, 3, 4]} color="black" heavy>
            <FormattedMessage id="buy.heading" />
          </Text>

          <BuyButtons />
        </StyledModal>
      </Wrapper>
    );
  }
}

Buy.propTypes = {
  asAnchor: PropTypes.bool,
};

Buy.defaultProps = {
  asAnchor: false,
};

export default Buy;
