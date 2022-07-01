import AccountSrc from 'assets/images/UserImageLarge.svg';

export type AccountType = {
  id: number;
  name: string;
  email?: string;
  profileImage: string;
};
export type MileStoneType = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  progress: number;
  openedIssue: number;
  closedIssue: number;
};
export type LabelType = {
  id: number;
  title: string;
  color: string;
  description?: string;
};

export const accountsData: Array<AccountType> = [
  {
    id: 1,
    name: 'js',
    email: 'js@codesquad.com',
    profileImage: AccountSrc,
  },
  {
    id: 2,
    name: 's',
    email: 's@codesquad.com',
    profileImage: AccountSrc,
  },
];

export const mileStonesData: Array<MileStoneType> = [
  {
    id: 1,
    title: '이슈트래커 1주차',
    description: '개발 1주차',
    dueDate: '2022-06-19',
    progress: 0.6666666666666666,
    openedIssue: 2,
    closedIssue: 1,
  },
  {
    id: 3,
    title: '이슈트래커 3주차',
    description: '개발 3주차',
    dueDate: '2022-07-03',
    progress: 0,
    openedIssue: 0,
    closedIssue: 1,
  },
];
export const labelsData: Array<LabelType> = [
  {
    id: 1,
    title: 'documentation',
    description: '서비스에 대한 개선 사항 혹은 추가 사항',
    color: '#004DE3',
  },
  {
    id: 2,
    title: 'bug',
    description: '서비스에 발생하는 오류들',
    color: '#C60B00',
  },
  {
    id: 3,
    title: 'refact',
    description: '서비스 개선',
    color: '#000000',
  },
];
