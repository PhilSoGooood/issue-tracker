import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const sidebarWrapper = styled.aside``;

export const sidebar = styled.div`
  width: 308px;
  height: 504px;
  border-radius: 16px;
  margin-left: 16px;
  background: ${({ theme }) => theme.backgroundColors.gray1};
`;

export const userBar = styled.div`
  height: 216px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-bottom: 0;
  border-radius: 16px 16px 0 0;
`;

export const labelBar = styled.div`
  height: 140px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-bottom: 0;
`;

export const milestoneBar = styled.div`
  height: 148px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: 0 0 16px 16px;
`;

export const barHeader = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const barHeaderText = styled.span`
  ${({ theme }) => theme.fontStyles.linkSmall};
`;

export const userUnit = styled.div`
  ${mixin.flexbox({ vertical: 'center' })};
  height: 44px;
  margin-top: 24px;
`;

export const userName = styled.span`
  ${({ theme }) => theme.fontStyles.textSmall};
`;

export const label = styled.label<{ color: string; backgroundColor: string }>`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  ${({ theme }) => theme.fontStyles.textXSmall};
  width: 121px;
  height: 28px;
  padding: 0 16px;
  border-radius: 30px;
  margin: 16px 0;
  background: ${({ backgroundColor, theme }) => theme.backgroundColors[backgroundColor]};
  color: ${({ color, theme }) => theme.fontColors[color]};
`;

export const milstoneContent = styled.div`
  ${({ theme }) => theme.fontStyles.textSmall};
  height: 24px;
  margin-top: 4px;
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const buttonWrapper = styled.div`
  ${mixin.flexbox({ dir: 'row-reverse' })};
  height: 32px;
`;

export const deleteButton = styled.button.attrs(() => ({ type: 'button' }))`
  width: 67px;
  height: 32px;
  margin: 12px 32px 0 0;
  color: ${({ theme }) => theme.fontColors.red};
`;

export const deleteButtonText = styled.span`
  ${({ theme }) => theme.fontStyles.linkSSmall};
`;
