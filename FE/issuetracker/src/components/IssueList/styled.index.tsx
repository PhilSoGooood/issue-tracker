import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';
import { Link } from 'react-router-dom';

export const IssueListWrap = styled.div`
  ${mixin.flexbox({ dir: 'column', vertical: 'center' })};
`;

export const IssueListTop = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  width: 100%;
  height: 40px;
  margin-bottom: 32px;
`;
export const FilterBar = styled.div`
  ${mixin.flexbox({ horizontal: 'flex-start', vertical: 'center' })};
  width: 600px;
  height: 100%;
`;
export const Filter = styled.button`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  position: relative;
  gap: 12px;
  width: 128px;
  height: 100%;
  border-radius: 11px 0px 0px 11px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  ${({ theme }) => theme.fontStyles.linkSmall}
  color: ${({ theme }) => theme.fontColors.gray2};
  gap: 42px;
`;
export const SearchBar = styled.input`
  ${mixin.flexbox({ vertical: 'center' })};
  padding: 6px 24px;
  width: 472px;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: 0px 11px 11px 0px;
  background: ${({ theme }) => theme.backgroundColors.gray3};
`;
export const IssueListTopRight = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
`;
export const Buttons = styled.div`
  display: flex;
  border-radius: 11px;
`;

export const LabelBtn = styled(Link)`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  width: 160px;
  height: 100%;
  border-radius: 11px 0px 0px 11px;
  ${({ theme }) => theme.fontStyles.linkSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
  gap: 8px;
  text-decoration: none;
`;
export const MileStoneBtn = styled(LabelBtn)`
  border-radius: 0px 11px 11px 0px;
`;
export const BtnText = styled.div`
  ${({ theme }) => theme.fontStyles.linkSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
`;
export const BtnContentCount = styled(BtnText)``;
export const IssueOption = styled(Link)`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  background: ${({ theme }) => theme.backgroundColors.blue2};
  gap: 4px;
  border-radius: 11px;
  width: 120px;
  height: 100%;
  ${({ theme }) => theme.fontStyles.linkSSmall};
  color: ${({ theme }) => theme.fontColors.gray1};
  text-decoration: none;
`;

export const Dropdown = styled.div<{ isClicked: boolean }>`
  position: absolute;
  left: 0;
  top: 50px;
  ${mixin.flexbox({ dir: 'column', horizontal: 'flex-start', vertical: 'center' })};
  display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
  width: 240px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  padding-bottom: 10px;
  z-index: 10;
`;
export const DropdownTitle = styled.div`
  width: 100%;
  height: 48px;
  ${mixin.flexbox({ horizontal: 'flex-start', vertical: 'center' })};
  ${({ theme }) => theme.fontStyles.textMedium};
  color: ${({ theme }) => theme.fontColors.gray5};
  padding: 8px 16px;
  background: ${({ theme }) => theme.backgroundColors.gray2};
  border-radius: 16px 16px 0px 0px;
`;
export const DropdownContent = styled.div`
  width: 100%;
  height: 48px;
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  background: ${({ theme }) => theme.backgroundColors.gray1};
  padding: 8px 16px;
  color: ${({ theme }) => theme.fontColors.gray5};
  border-top: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  ${({ theme }) => theme.fontStyles.textSmall};
`;
