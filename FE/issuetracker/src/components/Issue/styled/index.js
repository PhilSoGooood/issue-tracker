import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const seperator = styled.div`
  height: 1px;
  margin: 16px 0;
  background: ${({ theme }) => theme.backgroundColors.gray4};
`;

export const issueContentWrapper = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between' })};
  margin: 16px 0;
`;
