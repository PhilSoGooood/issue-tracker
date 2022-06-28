import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const inputWrapper = styled.div`
  ${mixin.flexbox({ vertical: 'center' })};
  height: 40px;
  padding: 0 24px;
  border-radius: 11px;
  background: ${({ theme }) => theme.backgroundColors.gray3};
`;

export const input = styled.input.attrs(() => ({ type: 'text' }))`
  ${({ theme }) => theme.fontStyles.textSmall};
  width: calc(100% - 88px);
  height: 40px;
  color: ${({ theme }) => theme.fontColors.gray5};

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.fontColors.gray4};
  }
`;

export const inputLabel = styled.label`
  ${mixin.flexbox({ vertical: 'center' })};
  width: 90px;
  height: 40px;
  margin-right: 8px;
  color: ${({ theme }) => theme.fontColors.gray2};
`;
