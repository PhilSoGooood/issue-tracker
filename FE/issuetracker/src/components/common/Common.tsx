import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';

type LabelType = {
  title: string;
  color: string;
};
function Label({ title, color }: LabelType) {
  return <LabelWrap color={color}>{title}</LabelWrap>;
}
export const LabelWrap = styled.div<{ color: string }>`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  background : ${({ color }) => color};
  height: 28px;
  min-width: 50px;
  border-radius: 999px;
  ${({ theme }) => theme.fontStyles.textXSmall};
  color: ${({ theme }) => theme.fontColors.gray1};
`;

export const AccountImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100%;
`;
export default Label;

export const ProgressBar = styled.div`
  width: 244px;
  height: 8px;
  border-radius: 10px;
  margin-top: 16px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.backgroundColors.blue2} 0%,
    ${({ theme }) => theme.backgroundColors.blue2} 15.21%,
    ${({ theme }) => theme.backgroundColors.gray3} 15.22%,
    ${({ theme }) => theme.backgroundColors.gray3} 100%
  );
`;
