import styled from 'styled-components';

import map from './map.png';

export default styled.div`
  background-image: url(${map});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  height: 75%;
  width: 95%;
  top: 12.5%;
  left: 2.5%;
  pointer-events: none;
  z-index: -1;
`;
