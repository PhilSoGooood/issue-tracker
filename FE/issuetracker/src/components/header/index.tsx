import { useRecoilValue } from 'recoil';
import * as S from 'components/header/styled.index';
import { userState } from 'store/userState';

function Header() {
  const { profileUrl } = useRecoilValue(userState);
  return (
    <S.HeaderWrap>
      <S.Title to="/">Issue Tracker</S.Title>
      <S.AccountImg src={profileUrl} />
    </S.HeaderWrap>
  );
}

export default Header;
