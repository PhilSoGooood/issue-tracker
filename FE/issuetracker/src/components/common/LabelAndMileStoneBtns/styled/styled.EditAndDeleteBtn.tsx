import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const labelListButtonWrapper = styled.div`
  ${mixin.flexbox({ vertical: 'center' })};
  width: 108px;
  height: 100px;
  margin-right: 2px;
`;

const labelButton = styled.button.attrs(() => ({ type: 'button' }))`
  width: 43px;
  height: 32px;
`;

export const labelEditButton = styled(labelButton)`
  color: ${({ theme }) => theme.fontColors.gray2};
  margin-right: 24px;
`;

export const labelDeleteButton = styled(labelButton)`
  color: ${({ theme }) => theme.fontColors.red};
`;

export const labelButtonText = styled.span`
  ${({ theme }) => theme.fontStyles.linkSSmall};
  margin-left: 4px;
`;
