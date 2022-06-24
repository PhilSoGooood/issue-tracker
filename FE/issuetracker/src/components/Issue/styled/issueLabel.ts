import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const issueLabel = styled.label<{ isIssueClosed: boolean }>`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 100px;
  height: 40px;
  border: 2px solid
    ${({ isIssueClosed, theme }) =>
      isIssueClosed ? theme.backgroundColors.purple1 : theme.backgroundColors.blue2};
  border-radius: 30px;
  margin-right: 8px;
  background: ${({ isIssueClosed, theme }) =>
    isIssueClosed ? theme.backgroundColors.purple2 : theme.backgroundColors.blue1};
  color: ${({ isIssueClosed, theme }) =>
    isIssueClosed ? theme.fontColors.purple : theme.fontColors.blue};
`;

export const labelText = styled.span`
  ${({ theme }) => theme.fontStyles.textXSmall};
  margin-left: 4px;
`;
