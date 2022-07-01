import { atom } from 'recoil';

const data = localStorage.getItem('profileImage');
const profileUrl = data !== null ? data : '';

interface userType {
  name: string;
  profileUrl: string;
}

interface userStateType {
  key: string;
  default: userType;
}

const initialState: userStateType = {
  key: 'userState',
  default: {
    name: '',
    profileUrl,
  },
};

export const userState = atom(initialState);
