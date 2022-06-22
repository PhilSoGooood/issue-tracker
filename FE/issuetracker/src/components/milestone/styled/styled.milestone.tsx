import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const MileStoneWrap = styled.div<{ idx: number }>`
  width: 100%;
  height: 100px;
  ${mixin.flexbox({ dir: 'column', horizontal: 'center' })};
  gap: 8px;
  padding: 0 32px;
  background: ${({ theme }) => theme.backgroundColors.gray1};
  border-top: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
`;

export const MileStoneTop = styled.div`
  width: 100%;
  height: 32px;
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
`;
export const MileStoneTopLeft = styled.div`
  ${mixin.flexbox({ vertical: 'center' })};
  gap: 10px;
  height: 32px;
`;
export const MileStoneIconFigure = styled.figure`
  color: ${({ theme }) => theme.fontColors.blue};
`;
export const Title = styled.div`
  ${({ theme }) => theme.fontStyles.linkMedium};
  color: ${({ theme }) => theme.fontColors.gray5};
`;
export const DueDate = styled.div`
  ${({ theme }) => theme.fontStyles.textSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  gap: 10px;
`;
export const MileStoneTopRight = styled.div`
  ${mixin.flexbox({ horizontal: 'flex-end', vertical: 'center' })};
  gap: 10px;
`;
export const CloseMileStone = styled.div`
  ${mixin.flexbox({ vertical: 'center' })};
  ${({ theme }) => theme.fontStyles.linkSSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
  gap: 5px;
  margin-right: 20px;
`;

export const MileStoneBottom = styled.div`
  width: 100%;
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
`;
export const Discription = styled.div`
  ${({ theme }) => theme.fontStyles.textSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
`;
export const MileStoneProgressBar = styled.div`
  ${mixin.flexbox({ dir: 'column', horizontal: 'center' })};
  gap: 8px;
`;
export const ProgressStatus = styled.div`
  width: 100%;
  ${mixin.flexbox({ horizontal: 'space-between' })};
`;
export const CompleteRate = styled.div`
  ${({ theme }) => theme.fontStyles.textXSmall};
  color: ${({ theme }) => theme.fontColors.gray2};
`;
export const IssueStatus = styled(CompleteRate)``;
