import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import * as S from 'components/Loading/styled.index';
import { loginState } from 'store/loginState';
import { userState } from 'store/userState';

function Loading() {
  const navigate = useNavigate();
  const setLogin = useSetRecoilState(loginState);
  const [userData, setUserData] = useRecoilState(userState);
  const authUri =
    'https://github.com/login/oauth/authorize?client_id=15bef45e3df6b28cf7d6&&redirect_uri=http://144.24.86.236/login/callback';
  // const authUri = 'https://github.com/login/oauth/authorize?client_id=15bef45e3df6b28cf7d6&scope=repo:status read:repo_hook user:email'
  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await fetch(authUri);
        const data = await response.json();

        localStorage.setItem('name', data.name);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('profileImage', data.profileImage);

        setUserData({
          name: data.name,
          profileUrl: data.profileImage,
        });
        setLogin(true);

        navigate('/');
      } catch (error) {
        throw new Error();
      }
    };
    getToken();
  }, [setLogin, setUserData, userData, navigate, authUri]);

  return (
    <S.spinnerWrapper>
      <S.spinner />
    </S.spinnerWrapper>
  );
}
export default Loading;
