import { atom } from 'recoil';
import userImageURL from 'assets/images/UserImageLarge.svg';
import userImageURL2 from 'assets/images/UserImageLarge2.svg';

const initialData = {
  id: 2,
  title: 'FE 이슈트래커 디자인 시스템 구현',
  writer: {
    id: 1,
    name: 'Oni',
    imageUrl: userImageURL,
  },
  writtenTime: '2022-06-22T16:37:04',
  log: '이 이슈가 23분 전에 Oni님에 의해 열렸습니다',
  comments: [
    {
      writer: {
        id: 1,
        name: 'Oni',
        imageUrl: userImageURL,
      },
      log: '23분 전',
      description:
        '처음부터 전부 구현하려고 하지 말고 필수적인 기능부터 만든 후, 차근차근 완성도를 높여보세요',
    },
    {
      writer: {
        id: 2,
        name: 'Daniel',
        imageUrl: userImageURL2,
      },
      log: '14분 전',
      description: '마감일은 언제인가요??',
    },
  ],
  milestone: {
    id: 1,
    title: '이슈트래커 1주차',
    description: '개발 1주차',
    dueDate: '2022-06-19',
    progress: 0.6666666666666666,
    openedIssue: 2,
    closedIssue: 1,
  },
  labels: [
    {
      id: 1,
      title: 'documentation',
      description: '서비스에 대한 개선 사항 혹은 추가 사항',
      color: {
        font: 'gray1',
        background: 'blue2',
      },
    },
  ],
  assignees: [
    {
      id: 1,
      name: 'Oni',
      imageUrl: userImageURL,
    },
    {
      id: 2,
      name: 'Daniel',
      imageUrl: userImageURL2,
    },
  ],
  closed: false,
};

export const issueState = atom({
  key: 'issue2',
  default: initialData,
});
