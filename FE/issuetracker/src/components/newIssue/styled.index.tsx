import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const NewIssueWrap = styled.div`
  height: 130vh;
`;

export const NewIssueTitle = styled.div`
  ${({ theme }) => theme.fontStyles.display};
  color: ${({ theme }) => theme.fontColors.gray5};
`;

export const UnderLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
  margin: 32px 0;
`;
export const NewIssueContent = styled.div`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'flex-start' })};
  width: 100%;
  gap: 32px;
`;
export const ImgAndTitle = styled.div`
  ${mixin.flexbox({ vertical: 'start' })};
  width: 940px;
  gap: 16px;
`;
export const TitleInput = styled.input`
  width: 880px;
  height: 56px;
  ${({ theme }) => theme.fontStyles.textSmall};
  padding: 14px 24px;
  border-radius: 14px;
  background: ${({ theme }) => theme.backgroundColors.gray3};
`;
export const InputArea = styled.div`
  width: 880px;
  /* height: 343px; */
  border-radius: 16px;
  background: ${({ theme }) => theme.backgroundColors.gray3};
  padding: 16px 24px 0 24px;
  margin: 16px 0 0 64px;
`;
export const NewIssueInput = styled.textarea`
  width: 100%;
  height: 280px;
  ${({ theme }) => theme.fontStyles.textSmall};
  color: ${({ theme }) => theme.fontColors.gray4};
`;
export const IssueContentLeft = styled.div`
  width: 940px;
`;
export const AttatchFile = styled.div`
  width: 100%;
  height: 52px;
  ${mixin.flexbox({ horizontal: 'flex-start', vertical: 'center' })};
  gap: 10px;
  ${({ theme }) => theme.fontStyles.linkSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
  border-top: 1px dashed ${({ theme }) => theme.backgroundColors.gray4};
  margin-top: 10px;
`;
export const Buttons = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  float: right;
  height: 56px;
  gap: 10px;
  color: ${({ theme }) => theme.fontColors.gray2};
`;

export const CancelText = styled.span`
  ${({ theme }) => theme.fontStyles.linkSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
`;
export const CompleteBtn = styled.button`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  width: 240px;
  height: 100%;
  opacity: 0.5;
  border-radius: 20px;
  background: ${({ theme }) => theme.backgroundColors.blue2};
  ${({ theme }) => theme.fontStyles.linkMedium};
  color: ${({ theme }) => theme.fontColors.gray1};
  margin-left: 22px;
`;
