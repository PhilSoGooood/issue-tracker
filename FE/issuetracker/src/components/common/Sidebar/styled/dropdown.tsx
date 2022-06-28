import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const PlusFigure = styled.figure`
  position: relative;
  z-index: auto;
`;

export const DropdownPanel = styled.div<{ isClicked: boolean }>`
  position: absolute;
  z-index: 10;
  display: ${({ isClicked }) => (isClicked ? 'block' : 'none')};
  left: -195px;
  top: 30px;
  width: 240px;
  height: 138px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: 16px;
  background: ${({ theme }) => theme.backgroundColors.gray1};
`;
export const DropDownTop = styled.div`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.backgroundColors.gray2};
  ${mixin.flexbox({ vertical: 'center', horizontal: 'flex-start' })};
  ${({ theme }) => theme.fontStyles.textMedium};
  color: ${({ theme }) => theme.fontColors.gray5};
  border-bottom: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: 16px 16px 0px 0px;
  padding: 8px 16px;
`;
