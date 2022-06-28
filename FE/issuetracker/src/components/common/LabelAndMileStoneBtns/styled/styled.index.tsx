import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';
import { Link } from 'react-router-dom';

export const labelTop = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  height: 40px;
  margin-top: 32px;
`;

export const tabBar = styled.nav`
  ${mixin.flexbox({})};
  width: 321px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: 11px;
`;

export const leftBar = styled(Link)<{ $islabelpage: boolean }>`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 160px;
  height: 40px;
  border-radius: 11px 0 0 11px;
  text-decoration: none;
  background: ${({ $islabelpage, theme }) =>
    $islabelpage ? theme.backgroundColors.gray4 : theme.backgroundColors.gray2};
`;

export const rightBar = styled(leftBar)<{ $islabelpage: boolean }>`
  background: ${({ $islabelpage, theme }) =>
    $islabelpage ? theme.backgroundColors.gray2 : theme.backgroundColors.gray4};
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

export const button = styled.button.attrs(() => ({ type: 'button' }))`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 120px;
  height: 40px;
  border-radius: 11px;
`;

export const addButton = styled(button)`
  background: ${({ theme }) => theme.backgroundColors.blue2};
  color: ${({ theme }) => theme.fontColors.gray1};
`;

export const closeButton = styled(button)`
  border: 2px solid ${({ theme }) => theme.backgroundColors.blue2};
  background: ${({ theme }) => theme.backgroundColors.gray1};
  color: ${({ theme }) => theme.fontColors.blue};
`;

export const buttonText = styled.span`
  ${({ theme }) => theme.fontStyles.linkSSmall};
  margin-left: 4px;
`;
