import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const AdditionalContents = styled.div`
  ${mixin.flexbox({ dir: 'column', vertical: 'flex-start' })};
  width: 308px;
  z-index: auto;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
`;
export const AdditionalContent = styled.div<{ first: boolean }>`
  position: relative;
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  padding: 34px 32px;
  width: 100%;
  border-top: ${({ first }) => (first ? 'none' : '1px solid #D9DBE9')};
  ${({ theme }) => theme.fontStyles.linkSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
`;
