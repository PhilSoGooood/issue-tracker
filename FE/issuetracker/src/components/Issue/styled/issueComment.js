import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const commentArticle = styled.article`
  ${mixin.flexbox({})};
  height: 124px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const commentUserImage = styled.figure`
  display: inline-flex;
  width: 44px;
  height: 44px;
  margin-right: 16px;
`;

export const comment = styled.div`
  width: 880px;
  height: 124px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: 16px;
  background: ${({ theme }) => theme.backgroundColors.gray1};
`;

export const commentHeader = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  height: 64px;
  padding: 24px;
  border-radius: 16px 16px 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  background: ${({ theme }) => theme.backgroundColors.gray2};
`;

export const commentHeaderLeft = styled.div`
  display: inline-flex;
`;

export const commentHeaderRight = styled.div`
  ${mixin.flexbox({ vertical: 'center' })};
  display: inline-flex;
`;

export const userName = styled.span`
  ${({ theme }) => theme.fontStyles.textSmall};
  margin-right: 8px;
  color: ${({ theme }) => theme.fontColors.gray5};
`;

export const timeStamp = styled.span`
  ${({ theme }) => theme.fontStyles.textSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const writeBadge = styled.label`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  ${({ theme }) => theme.fontStyles.textXSmall};
  width: 66px;
  height: 24px;
  margin-right: 24px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  border-radius: 30px;
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const editButton = styled.button.attrs(() => ({ type: 'button' }))`
  width: 43px;
  height: 32px;
  margin-right: 20px;
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const emoticon = styled.button.attrs(() => ({ type: 'button' }))`
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const commentContent = styled.div`
  display: inline-block;
  ${({ theme }) => theme.fontStyles.textSmall};
  margin: 16px 0 16px 24px;
`;
