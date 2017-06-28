import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

const Buy = ({ children, ...props }) => (
  <Button {...props}>
    {children}
  </Button>
);

Buy.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Buy;
