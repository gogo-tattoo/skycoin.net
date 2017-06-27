import styled, { css } from 'styled-components';
import { space, width, fontSize, color } from 'styled-system';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';

import { FONT_FAMILIES } from 'config';

const Heading = createComponentFromTagProp({
  tag: 'h2',
  prop: 'as',
});

export default styled(Heading)`
  ${fontSize}
  ${color}
  ${space}
  ${width}

  font-family: ${FONT_FAMILIES.mono};
  font-weight: ${props => props.heavy ? 'bold' : 'normal'};
  line-height: 1.5;
`;
