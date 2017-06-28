import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Heading from 'components/Heading';
import Text from 'components/Text';

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const List = ({ heading, links }) => (
  <div>
    <Heading color="black" fontSize={3} heavy>
      <FormattedMessage id={heading} />
    </Heading>

    <Text fontSize={[1, 2, 3]} color="gray.8" mb={0}>
      <LinkList>
        {links.map(({ label, to }, linkIndex) => (
          <li key={linkIndex}>
            <StyledLink to={to}>
              <FormattedMessage id={label} />
            </StyledLink>
          </li>
        ))}
      </LinkList>
    </Text>
  </div>
);

List.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.shape({
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default List;
