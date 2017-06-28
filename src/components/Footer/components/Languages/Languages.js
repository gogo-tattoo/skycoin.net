import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Languages = styled.div`
  list-style: none;
  margin: 0;
`;

const Language = styled.span`
  &:not(:first-of-type):before {
    content: ' · '
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Languages>
    <Language><StyledLink to="/">English</StyledLink></Language>
    <Language><StyledLink to="/cn">中文</StyledLink></Language>
    <Language><StyledLink to="/ru">Ру́сский</StyledLink></Language>
  </Languages>
);
