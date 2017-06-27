import React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import Hero from './components/Hero';
import About from './components/About';
import Network from './components/Network';
import Distribution from './components/Distribution';
import Roadmap from './components/Roadmap';
import GetStarted from 'components/GetStarted';
import Footer from 'components/Footer';

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
    <About />
    <Network />
    <Distribution />
    <Roadmap />
    <GetStarted />
    <Footer />
  </div>
);

export default injectIntl(Home);
