import { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { loginState } from 'context/loginState';
import { userState } from 'context/userState';

function Callback() {
  const navigate = useNavigate();
  const setLogin = useSetRecoilState(loginState);
  const [userData, setUserData] = useRecoilState(userState);
  const authUri = 'http://144.24.86.236/login ';

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

  return <div>Callback</div>;
}
export default Callback;
