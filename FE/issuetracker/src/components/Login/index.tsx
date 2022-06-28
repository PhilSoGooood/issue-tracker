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
            fetch(
              'https://github.com/login/oauth/authorize?client_id=15bef45e3df6b28cf7d6&scope=repo:status read:repo_hook user:email',
            );
          }
        }}
      >
        GitHub 계정으로 로그인
      </S.GitHubLogin>
    </S.LoginWrap>
  );
}

export default Login;
