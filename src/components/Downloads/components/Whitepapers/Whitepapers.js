import React from 'react';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Table, { TableWrapper } from 'components/Table';

import downloads from './downloads';

export default () => (
  <Container>
    <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
      <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]} id="whitepapers">
        <FormattedMessage id="downloads.whitepapers.heading" />
      </Heading>
    </Box>

    <TableWrapper>
      <Table>
        <tbody>
          {downloads.map(({ name, download, filetype, filesize }) => (
            <tr>
              <td>{name}</td>

              <td>
                <a href={download}>
                  <FormattedMessage id="downloads.whitepapers.download" />
                  &nbsp;
                  ({filetype})
                </a>
              </td>

              <td>
                <Text as="span" color="gray.7" heavy>
                  {filesize}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  </Container>
);
