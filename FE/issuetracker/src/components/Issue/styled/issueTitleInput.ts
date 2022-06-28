import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const titleInputWrapper = styled.div<{ isInputFocused: boolean }>`
  ${mixin.flexbox({ vertical: 'center' })};
  width: 940px;
  height: 40px;
  padding: 0 24px;
  border-radius: 11px;
  background: ${({ isInputFocused, theme }) =>
    isInputFocused ? theme.backgroundColors.gray1 : theme.backgroundColors.gray3};
`;

export const titleInputLabel = styled.label`
  ${mixin.flexbox({ vertical: 'center' })};
  ${({ theme }) => theme.fontStyles.textXSmall};
  width: 80px;
  height: 40px;
  margin-right: 8px;
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const titleInput = styled.input.attrs(() => ({ type: 'text' }))`
  ${({ theme }) => theme.fontStyles.textSmall};
  width: 804px;
  height: 40px;
  color: ${({ theme }) => theme.fontColors.gray5};
`;
