import styled from 'styled-components';

export const issueTitle = styled.div`
  ${({ theme }) => theme.fontStyles.display};
  height: 40px;
  color: ${({ theme }) => theme.fontColors.gray5};
  margin-right: 16px;
`;

export const issueNumber = styled.div`
  ${({ theme }) => theme.fontStyles.display};
  height: 40px;
  color: ${({ theme }) => theme.fontColors.gray2};
`;
