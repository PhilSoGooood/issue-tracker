import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as S from 'components/Login/styled.index';
import { loginState } from 'context/loginState';

function Login() {
  const [login, setLogin] = useRecoilState(loginState);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      setLogin(true);
    }
  }, [setLogin, token]);

  return (
    <S.LoginWrap>
      <S.Title>Issue Tracker</S.Title>
      <S.GitHubLogin
        onClick={() => {
          if (login) {
            navigate('/');
          } else {
            navigate('/callback');
          }
        }}
      >
        GitHub 계정으로 로그인
      </S.GitHubLogin>
    </S.LoginWrap>
  );
}

export default Login;
