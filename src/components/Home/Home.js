import React from 'react';
import styled from 'styled-components';

import Header from '../Header';

const Home = styled.div`
  background-color: #4990e2;
  padding: 1rem 0;
`;

export default () => (
  <Home>
    <Header />
  </Home>
);
