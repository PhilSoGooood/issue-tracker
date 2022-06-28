import styled from 'styled-components';

export const newMileStoneWrapper = styled.div`
  width: 100%;
  height: 288px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: 16px;
  margin-top: 24px;
  background: ${({ theme }) => theme.backgroundColors.gray1};
`;

export const Title = styled.div`
  ${({ theme }) => theme.fontStyles.textLarge};
  color: ${({ theme }) => theme.fontColors.black};
  margin-bottom: 24px;
`;

export const inputTopWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  height: 40px;
  margin-bottom: 16px;
`;

export const inputWrapper = styled.div`
  height: 40px;
  padding: 0 24px;
  border-radius: 11px;
  background: ${({ theme }) => theme.backgroundColors.gray3};
`;

export const input = styled.input.attrs(() => ({ type: 'text' }))`
  ${({ theme }) => theme.fontStyles.textSmall};
  height: 40px;
  color: ${({ theme }) => theme.fontColors.gray5};

  &::placeholder {
    color: ${({ theme }) => theme.fontColors.gray4};
  }
`;

export const inputLabel = styled.label`
  width: 80px;
  height: 40px;
  margin-right: 8px;
`;
