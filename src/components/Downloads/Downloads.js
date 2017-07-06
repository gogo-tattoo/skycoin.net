import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import GetStarted from 'components/GetStarted';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Wallet from './components/Wallet';
import Whitepapers from './components/Whitepapers';

const Downloads = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'downloads.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'downloads.description' })}
      />
    </Helmet>
    <Header />

    <Wallet />
    <Whitepapers />

    <GetStarted />
    <Footer />
  </div>
);

Downloads.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Downloads);
