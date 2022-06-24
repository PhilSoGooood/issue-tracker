import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const newLabelListWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const labelForm = styled.div`
  ${mixin.flexbox({})}
  width: 100%;
  height: 100px;
  padding: 16px 24px 24px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  gap: 15px;
`;

const labelContent = styled.div`
  span {
    ${({ theme }) => theme.fontStyles.textXSmall};
    display: inline-block;
    margin-bottom: 4px;
  }

  input {
    ${({ theme }) => theme.fontStyles.textSmall};
    width: inherit;
    border-radius: 16px;
    background: ${({ theme }) => theme.backgroundColors.gray3};
    color: ${({ theme }) => theme.fontColors.gray5};
  }
`;

export const labelName = styled(labelContent)`
  width: 290px;
`;

export const labelDescription = styled(labelContent)`
  width: 352px;
`;

export const labelColor = styled(labelContent)`
  width: 240px;
`;

export const labelInput = styled.input.attrs(() => ({ type: 'text' }))`
  ${({ theme }) => theme.fontStyles.textSmall};
  width: inherit;
  border-radius: 16px;
  background: ${({ theme }) => theme.backgroundColors.gray3};
  color: ${({ theme }) => theme.fontColors.gray5};
`;

export const labelColorController = styled.div`
  ${mixin.flexbox({})};
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const labelColorButton = styled.button.attrs(() => ({ type: 'button' }))`
  ${mixin.flexbox({ vertical: 'center' })};
  gap: 10px;
`;

export const buttonsWrapper = styled.div`
  width: 280px;
`;

export const buttonWrapperTop = styled.div`
  ${mixin.flexbox({ dir: 'row-reverse' })};
  width: 280px;
  margin-bottom: 10px;
`;

export const buttonWrapperBottom = styled.div`
  ${mixin.flexbox({ horizontal: 'end' })};
  width: 280px;
  gap: 10px;
`;

const button = styled.button.attrs(() => ({ type: 'button' }))`
  ${mixin.flexbox({ vertical: 'center', horizontal: 'center' })};
  ${({ theme }) => theme.fontStyles.linkSSmall};
  width: 100px;
  height: 30px;
  border-radius: 11px;
`;

export const cancleButton = styled(button)`
  border: 2px solid ${({ theme }) => theme.backgroundColors.blue2};
  background: ${({ theme }) => theme.backgroundColors.gray1};
  color: ${({ theme }) => theme.fontColors.blue};
`;

export const deleteButton = styled(cancleButton)<{ isNewLabel: boolean }>`
  visibility: ${({ isNewLabel }) => (isNewLabel ? 'visible' : 'hidden')};
`;

export const saveButton = styled(button)`
  background: ${({ theme }) => theme.backgroundColors.blue2};
  color: ${({ theme }) => theme.fontColors.gray1};
  opacity: 0.5;
`;
