import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import GetStarted from 'components/GetStarted';
import Footer from 'components/Footer';
import Hero from './components/Hero';
import DistributionEvent from './components/DistributionEvent';
import About from './components/About';
import Network from './components/Network';
import Miner from './components/Miner';
import Features from './components/Features';
import Roadmap from './components/Roadmap';

const Home = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'home.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'home.description' })}
      />
    </Helmet>

    <Hero />
    <DistributionEvent />
    <About />
    <Network />
    <Miner />
    <Roadmap />
    <Features />
    <GetStarted />
    <Footer />
  </div>
);

Home.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Home);
