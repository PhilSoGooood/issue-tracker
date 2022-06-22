import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

export const MileStonePageWrapper = styled.div``;

export const MileStoneStatus = styled.div`
  ${mixin.flexbox({ vertical: 'center', horizontal: 'center' })};
  height: 100%;
  gap: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundColors.gray4};
`;
export const OpenedMileStone = styled.div`
  ${({ theme }) => theme.fontStyles.linkSmall};
  color: ${({ theme }) => theme.fontColors.gray5};
  ${mixin.flexbox({ vertical: 'center', horizontal: 'center' })};
`;
export const ClosedMileStone = styled(OpenedMileStone)``;
