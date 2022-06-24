import * as S from 'components/header/styled.index';
import AccountSrc from 'assets/images/UserImageLarge.svg';

function Header() {
  return (
    <S.HeaderWrap>
      <S.Title to="/">Issue Tracker</S.Title>
      <S.AccountImg src={AccountSrc} />
    </S.HeaderWrap>
  );
}

export default Header;
