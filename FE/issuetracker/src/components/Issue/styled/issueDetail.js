import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const issueDetailWrapper = styled.div`
  ${mixin.flexbox({})};
  margin: 16px 0;
`;

export const issueDetail = styled.span`
  ${({ theme }) => theme.fontStyles.textMedium};
  color: ${({ theme }) => theme.fontColors.gray3};
`;
