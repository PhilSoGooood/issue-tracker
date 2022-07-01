import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const issueTitleWrapper = styled.div`
  ${mixin.flexbox({ vertical: 'center' })};
  position: relative;
  margin-top: 12px;
`;

export const issueTitle = styled.div`
  ${({ theme }) => theme.fontStyles.display};
  color: ${({ theme }) => theme.fontColors.gray5};
  margin-right: 16px;
`;

export const issueNumber = styled.div`
  ${({ theme }) => theme.fontStyles.display};
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const buttonWrapper = styled.div`
  display: inline-flex;
  position: absolute;
  right: 0;
`;
