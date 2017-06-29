import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box } from 'grid-styled';

import Button from '../Button';

const EXCHANGES = [{
  name: 'buy.c2cx',
  url: 'https://www.c2cx.com/in/trade_sky',
  color: 'red.7',
}, {
  name: 'buy.cryptopia',
  url: 'https://www.cryptopia.co.nz/Exchange/?market=SKY_BTC',
  color: 'gray.7',
}];

export default () => (
  <Box mx={-1}>
    {EXCHANGES.map(({ name, color, url }, i) => (
      <Button
        big
        key={i}
        href={url}
        m={1}
        color="white"
        bg={color}
        fontSize={[1, 3]}
        target="_blank"
        width={[1 / 1, 'auto']}
      >
        <FormattedMessage id={name} />
      </Button>
    ))}
  </Box>
);
