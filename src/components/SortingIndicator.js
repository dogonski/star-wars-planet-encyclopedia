import styled, { css } from 'styled-components';
import theme from '../theme/theme';

const SortingIndicator = styled.div`
  width: 6px;
  height: 6px;
  margin: 1px;
  background: ${theme.color.text};
  ${({ active }) =>
    active &&
    css`
      background: ${theme.color.main};
    `}
`;

export default SortingIndicator;
