import { atom } from 'recoil';
import { WriterType } from 'store/newIssue';
import { AccountType, LabelType } from 'data';

export type initialStateType = {
  key: string;
  default: PostIssueType[];
};
type PostMileStoneType = {
  id: number;
  title: string;
};

export type PostIssueType = {
  id?: number;
  title: string;
  writer: WriterType;
  writtenTime: string;
  milestone: PostMileStoneType;
  labels: Array<LabelType>;
  assignees: Array<AccountType>;
  closed: boolean;
};
const initialData: PostIssueType[] = [
  {
    id: 2,
    title: 'FE 이슈 트래커 개발',
    writer: {
      id: 1,
      name: 'js',
      profileImage: 'profile_image',
      email: 'js@codesquad.com',
    },
    writtenTime: '2022-06-17T16:37:04',
    milestone: {
      id: 1,
      title: '이슈트래커 1주차',
    },
    labels: [
      {
        id: 2,
        title: 'bug',
        color: '#C60B00',
      },
      {
        id: 3,
        title: 'feat',
        color: '#1a133d',
      },
    ],
    closed: false,
    assignees: [
      {
        id: 1,
        name: 'js',
        email: 'js@codesquad.com',
        profileImage: 'profile_image',
      },
      {
        id: 2,
        name: 's',
        email: 's@codesquad.com',
        profileImage: 'profile_image',
      },
    ],
  },
];
const initialState: initialStateType = {
  key: 'issueListState',
  default: initialData,
};
export const issueListState = atom(initialState);
