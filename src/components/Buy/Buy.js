import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '../Button';

export default (props) => (
  <Button {...props}>
    <FormattedMessage id="buy" />
  </Button>
);
