import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const buttonWrapper = styled.div`
  display: inline-flex;
  position: absolute;
  right: 0;
`;

export const issueButton = styled.button.attrs(() => ({ type: 'button' }))<{
  buttonState: string;
}>`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 120px;
  height: 40px;
  border-radius: 11px;
  margin-left: 8px;
  ${({ buttonState, theme }) => {
    switch (buttonState) {
      case 'active':
        return `
        background: ${theme.backgroundColors.blue2};
        color: ${theme.fontColors.gray1};
        `;
      default:
        return `
        border: 2px solid ${theme.backgroundColors.blue2};
        background: ${theme.backgroundColors.gray1};
        color: ${theme.fontColors.blue};
        `;
    }
  }};
`;

export const buttonText = styled.span`
  ${({ theme }) => theme.fontStyles.linkSSmall};
  margin-left: 4px;
`;
