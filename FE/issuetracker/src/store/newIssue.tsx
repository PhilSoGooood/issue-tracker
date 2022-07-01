import { atom } from 'recoil';
import AccountSrc from 'assets/images/UserImageLarge.svg';
import { MileStoneType, LabelType, AccountType } from 'data';

export type WriterType = {
  id?: number;
  name: string;
  profileImage: string;
  email?: string;
};
export type CommentType = {
  writer: WriterType;
  writtenTime: string;
  description: string;
};

export type newIssueType = {
  id?: number;
  title: string;
  writer: WriterType;
  writtenTime: string;
  comments: Array<CommentType>;
  milestone: MileStoneType;
  labels: Array<LabelType>;
  assignees: Array<AccountType>;
  closed: boolean;
};
export type initialStateType = {
  key: string;
  default: newIssueType;
};
const newIssue: newIssueType = {
  title: 'FE 이슈트래커 디자인 시스템 구현',
  writer: {
    name: 'Oni',
    profileImage: AccountSrc,
  },
  writtenTime: '2022-06-22T16:37:04',
  comments: [
    {
      writer: {
        name: 'Oni',
        profileImage: AccountSrc,
      },
      writtenTime: '2022-06-22T16:37:04',
      description:
        '처음부터 전부 구현하려고 하지 말고 필수적인 기능부터 만든 후, 차근차근 완성도를 높여보세요',
    },
  ],
  milestone: {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    progress: 0,
    openedIssue: 0,
    closedIssue: 0,
  },
  labels: [
    {
      id: 0,
      title: '',
      description: '',
      color: '',
    },
  ],
  assignees: [
    {
      id: 0,
      name: '',
      profileImage: '',
      email: '',
    },
  ],
  closed: false,
};
const initialState: initialStateType = {
  key: 'newIssueState',
  default: newIssue,
};
export const newIssueState = atom(initialState);
