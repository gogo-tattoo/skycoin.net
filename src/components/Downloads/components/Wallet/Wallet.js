import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';

import { COLORS, SPACE } from 'config';
import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Table, { TableWrapper } from 'components/Table';

import { downloads, version } from './downloads';
import * as icons from './icons';

const Wallet = styled.div`
  border-top: 2px solid ${COLORS.gray[1]};
`;

const Icon = styled.img`
  max-width: ${rem(30)};
  display: block;
  margin: 0 auto;
  margin-bottom: ${rem(SPACE[2])};
`;

export default () => (
  <Wallet>
    <Container>
      <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
        <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
          <FormattedMessage id="downloads.wallet.heading" />
        </Heading>

        <Text fontSize={[3, 3, 4]} color="black" heavy mb={[5, 7]}>
          <FormattedMessage id="downloads.wallet.lead" />
        </Text>

        <Text fontSize={[3, 3, 4]} color="gray.9" heavy>
          <FormattedMessage id="downloads.wallet.build" values={{ version }} />
        </Text>
      </Box>

      <TableWrapper>
        <Table>
          <tbody>
            {/* TODO: refactor or move into another component */}
            {downloads.map(({ platform, icon, builds }, platformIndex) =>
              builds.map((build, buildIndex) =>
                build.architectures.map((architecture, architectureIndex) => (
                  <tr key={`${platformIndex}-${buildIndex}-${architectureIndex}`}>
                    {buildIndex === 0 &&
                      <th rowSpan={builds.reduce((a, { architectures: b }) => a + b.length, 0)}>
                        <Icon src={icons[icon]} />
                        <FormattedMessage id={platform} />
                      </th>
                    }

                    {architectureIndex === 0 &&
                      <td rowSpan={build.architectures.length}>
                        <FormattedMessage id={build.name} />
                      </td>
                    }

                    <td>{architecture.name}</td>

                    <td>
                      <a href={architecture.download}>
                        <FormattedMessage id="downloads.wallet.download" />
                        &nbsp;
                        ({architecture.filetype})
                      </a>
                    </td>

                    <td>
                      <a href={architecture.torrent}>
                        <FormattedMessage id="downloads.wallet.torrent" />
                      </a>
                    </td>

                    <td>
                      <Text as="span" color="gray.7" heavy>
                        {architecture.version}
                      </Text>
                    </td>

                    <td>
                      <Text as="span" color="gray.7" heavy>
                        {architecture.filesize}
                      </Text>
                    </td>
                  </tr>
                )),
              ),
            )}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  </Wallet>
);
