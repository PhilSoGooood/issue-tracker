import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const labelListLayout = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: 16px;
  margin-top: 24px;
  padding-bottom: 10px;
  background: ${({ theme }) => theme.backgroundColors.gray1};
`;

export const labelListTop = styled.div`
  ${mixin.flexbox({ vertical: 'center' })};
  height: 64px;
  padding-left: 32px;
  border-radius: 16px 16px 0 0;
`;

export const labelListTopText = styled.span`
  ${({ theme }) => theme.fontStyles.linkSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const labelListWrapper = styled.ul`
  width: inherit;
  min-height: 287px;
  border-radius: 16px;
`;

export const labelList = styled.li<{ isLastList: boolean }>`
  ${mixin.flexbox({ vertical: 'center' })};
  width: inherit;
  height: 100px;
  padding: 0 32px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: ${({ isLastList }) => (isLastList ? '0 0 16px 16px' : '')};
  margin-bottom: 1px;
  background: ${({ theme }) => theme.backgroundColors.gray1};
`;

export const labelImageWrapper = styled.figure`
  width: 184px;
  margin-right: 24px;
`;

export const labelImage = styled.label<{ color: string }>`
  ${mixin.flexbox({ vertical: 'center' })};
  ${({ theme }) => theme.fontStyles.textXSmall};
  display: inline-block;
  height: 28px;
  padding: 0 16px;
  border-radius: 30px;
  background: ${({ color, theme }) => color || theme.backgroundColors.gray2};
  color: ${({ color, theme }) =>
    color ? theme.backgroundColors.gray1 : theme.backgroundColors.gray5};
`;

export const labelListDescription = styled.div`
  ${mixin.flexbox({ vertical: 'center' })};
  ${({ theme }) => theme.fontStyles.textSmall};
  width: 880px;
  color: ${({ theme }) => theme.fontColors.gray2};
`;

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
