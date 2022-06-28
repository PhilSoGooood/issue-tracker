import styled from 'styled-components';
import { mixin } from 'design/GlobalStyles';
import { Link } from 'react-router-dom';

export const HeaderWrap = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })};
  width: 100%;
  padding: 27px 0;
  height: 94px;
  margin-bottom: 20px;
`;

export const Title = styled(Link)`
  ${({ theme }) => theme.fontStyles.logoMedium};
  text-decoration: none;
`;
export const AccountImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100%;
`;
