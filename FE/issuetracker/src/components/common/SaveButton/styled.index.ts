import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const saveCommentButtonWrapper = styled.div<{ margin: string }>`
  ${mixin.flexbox({ dir: 'row-reverse' })};
  width: 100%;
  margin: ${({ margin }) => margin};
`;

export const saveCommentButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 11px;
  background: ${({ theme }) => theme.backgroundColors.blue2};
  color: ${({ theme }) => theme.fontColors.gray1};
`;

export const saveCommentButtonText = styled.span`
  ${({ theme }) => theme.fontStyles.linkSSmall};
  margin-left: 4px;
`;
