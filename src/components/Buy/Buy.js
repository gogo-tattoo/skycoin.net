import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { eventInProgress } from 'components/Distribution/eventStatus';
import Button from '../Button';
import BuyButtons from '../BuyButtons';
import Modal, { styles } from '../Modal';
import Text from '../Text';

const Wrapper = styled.div`
  display: inline;
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

    const props = eventInProgress ? {
      href: 'https://event.skycoin.net/',
    } : {
      onClick: this.openModal,
    };

    return (
      <Wrapper>
        <Component {...props} {...rest} />
        <Modal
          contentLabel="Buy Skycoin"
          style={styles}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <Text fontSize={[2, 3, 4]} color="black" heavy>
            <FormattedMessage id="buy.heading" />
          </Text>

          <BuyButtons />
        </Modal>
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
