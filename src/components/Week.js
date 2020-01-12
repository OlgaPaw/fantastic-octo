import styled from 'styled-components';

import { colors } from '../consts';

export default styled.div`
  border: 1px solid ${colors.lightGrey};
  display: flex;
  justify-content: ${props => props.alignment};
  flex-grow: 1;
  order: ${props => props.order};
`;
