import styled from 'styled-components';

import media from 'utils/media';
import map from './map.png';

export default styled.div`
  background-image: url(${map});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  height: 75%;
  width: 100%;
  top: 12.5%;
  pointer-events: none;

  ${media.md.css`
    background-size: contain;
    width: 95%;
    left: 2.5%;
  `}
`;
