import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const AdditionalContents = styled.div`
  ${mixin.flexbox({ dir: 'column', vertical: 'flex-start' })};
  min-width: 308px;
  z-index: auto;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
`;
export const AdditionalContent = styled.div<{ first: boolean }>`
  position: relative;
  ${mixin.flexbox({ dir: 'column', horizontal: 'center', vertical: 'flex-start' })};
  width: 100%;
  border-top: ${({ first }) => (first ? 'none' : '1px solid #D9DBE9')};
  ${({ theme }) => theme.fontStyles.linkSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
  padding: 34px 32px;
  gap: 18px;
`;
export const ContentTitleAndButton = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  width: 100%;
`;
export const Status = styled.div`
  width: 100%;
  ${mixin.flexbox({ dir: 'column', vertical: 'flex-start', horizontal: 'center' })};
  gap: 16px;
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
