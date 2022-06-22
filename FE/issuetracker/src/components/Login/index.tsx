import * as S from 'components/Login/styled.index';

function Login() {
  return (
    <S.LoginWrap>
      <S.Title>Issue Tracker</S.Title>
      <S.GitHubLogin>GitHub 계정으로 로그인</S.GitHubLogin>
    </S.LoginWrap>
  );
}

export default Login;
