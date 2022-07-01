import styled, { css } from 'styled-components';
import { mixin } from 'design/GlobalStyles';
import { Link } from 'react-router-dom';

const labelHeight = css`
  height: 40px;
`;

export const labelTop = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  ${labelHeight}
  margin-top: 32px;
`;

export const tabBar = styled.nav`
  ${mixin.flexbox({})};
  width: 321px;
  ${labelHeight}
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: 11px;
`;

export const leftBar = styled(Link)<{ $activeLabel: boolean }>`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 160px;
  ${labelHeight}
  border-radius: 11px 0 0 11px;
  text-decoration: none;
  background: ${({ $activeLabel, theme }) =>
    $activeLabel ? theme.backgroundColors.gray4 : theme.backgroundColors.gray2};
`;

export const rightBar = styled(Link)`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 160px;
  ${labelHeight}
  border-radius: 11px 0 0 11px;
  text-decoration: none;
`;

export const LinkText = styled.span`
  ${({ theme }) => theme.fontStyles.linkSmall};
  margin: 0 8px;
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const numberText = styled.span`
  ${({ theme }) => theme.fontStyles.textSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const addButton = styled.button.attrs(() => ({ type: 'button' }))`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 120px;
  ${labelHeight}
  border-radius: 11px;
  background: ${({ theme }) => theme.backgroundColors.blue2};
  color: ${({ theme }) => theme.fontColors.gray1};
`;

export const addButtonText = styled.span`
  ${({ theme }) => theme.fontStyles.linkSSmall};
  margin-left: 4px;
`;
