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
  right: 0;
  top: 30px;
  width: 240px;
  height: 138px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: 16px;
  background: ${({ theme }) => theme.backgroundColors.gray1};
  overflow-y: scroll;
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
export const DropDownBottom = styled.div`
  width: 100%;
  ${mixin.flexbox({ dir: 'column', vertical: 'center', horizontal: 'flex-start' })};
`;
export const DropDownList = styled.div<{ idx: number }>`
  width: 100%;
  height: 48px;
  ${mixin.flexbox({ vertical: 'center', horizontal: 'space-between' })};
  border-top: 1px solid ${({ idx }) => (idx === 0 ? 'none' : '#D9DBE9')};
  padding: 8px 16px;
`;
export const DropDownContent = styled.div`
  ${mixin.flexbox({ vertical: 'center', horizontal: 'flex-start' })};
  gap: 8px;
  ${({ theme }) => theme.fontStyles.textSmall};
  color: ${({ theme }) => theme.fontColors.gray5};
`;
export const SmallAcountImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 100%;
`;
