import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

const Buy = ({ children, asAnchor, ...props }) => (asAnchor
  ? <a {...props}>{children}</a>
  : <Button {...props}>{children}</Button>);

Buy.propTypes = {
  children: PropTypes.element.isRequired,
  asAnchor: PropTypes.bool,
};

Buy.defaultProps = {
  asAnchor: false,
};

export default Buy;
