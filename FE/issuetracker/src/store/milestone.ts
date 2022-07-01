import { atom } from 'recoil';

// 추후에 데이터 요청을 통해 받아올 데이터
export const mileStoneData = [
  {
    id: 1,
    title: '이슈트래커 1주차',
    description: '개발 1주차',
    dueDate: '2022-06-19',
    progress: 0.6666666666666666,
    openedIssue: 1,
    closedIssue: 2,
  },
  {
    id: 3,
    title: '이슈트래커 3주차',
    description: '개발 3주차',
    dueDate: '2022-07-03',
    progress: 1,
    openedIssue: 0,
    closedIssue: 1,
  },
];

export interface mileStoneType {
  id: number;
  title: string;
  description?: string;
  dueDate?: string;
  progress: number;
  openedIssue: number;
  closedIssue: number;
}

interface mileStoneStateType {
  key: string;
  default: mileStoneType;
}

export const initialMileStone: mileStoneType = {
  id: 0,
  title: '마일스톤 제목',
  description: '레이블에 대한 설명',
  dueDate: '완료일 일정',
  progress: 0.7,
  openedIssue: 3,
  closedIssue: 7,
};

const initialState: mileStoneStateType = {
  key: 'mileStoneState',
  default: initialMileStone,
};

export const mileStone = atom(initialState);
