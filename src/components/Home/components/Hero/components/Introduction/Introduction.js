import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Text from 'components/Text';

export default () => (
  <Container>
    <Heading as="h1" color="white" fontSize={[5, 6, 7]} mb={7}>
      <FormattedMessage id="home.hero.heading.0" />
      <br />
      <FormattedMessage id="home.hero.heading.1" defaultMessage=" " />
    </Heading>

    <Button color="violet.5" bg="white" mr={[2, 5]} big fontSize={[1, 3]}>
      <FormattedMessage id="home.hero.buy" />
    </Button>

    <Button color="white" big outlined fontSize={[1, 3]}>
      <FormattedMessage id="home.hero.wallet.get" />
    </Button>

    <Text heavy color="white" fontSize={[1, 3]} mt={7}>
      <FormattedMessage id="home.hero.wallet.blurb.0" />
      <br />
      <FormattedMessage id="home.hero.wallet.blurb.1" />
    </Text>
  </Container>
);
