import * as I from 'design/icons';
import * as S from 'components/common/Sidebar/styled/dropdown';

import { useState } from 'react';
import { useRecoilState } from 'recoil';

import {
  accountsData,
  AccountType,
  labelsData,
  LabelType,
  mileStonesData,
  MileStoneType,
} from 'data';
import { keyMaker } from 'utils/util';
import { newIssueState } from 'store/newIssue';
import Label from '../Common';

type DropdownType = {
  subject: '담당자' | '레이블' | '마일스톤';
};

function DropDown({ subject }: DropdownType) {
  const [isClicked, setIsClicked] = useState(false);
  const [newIssue, setNewIssue] = useRecoilState(newIssueState);

  function setAssignee(content: AccountType) {
    if (newIssue.assignees[0].name === '')
      setNewIssue({
        ...newIssue,
        assignees: [
          {
            ...content,
          },
        ],
      });
    else {
      setNewIssue({
        ...newIssue,
        assignees: [
          ...newIssue.assignees,
          {
            ...content,
          },
        ],
      });
    }
  }
  function setLabels(content: LabelType) {
    if (newIssue.labels[0].title === '')
      setNewIssue({
        ...newIssue,
        labels: [
          {
            ...content,
          },
        ],
      });
    else {
      setNewIssue({
        ...newIssue,
        labels: [
          ...newIssue.labels,
          {
            ...content,
          },
        ],
      });
    }
  }
  function setMileStone(content: MileStoneType) {
    setNewIssue({
      ...newIssue,
      milestone: {
        ...content,
      },
    });
  }
  function getDropDownContents(subject: string) {
    let contentsData;
    switch (subject) {
      case '담당자':
        return accountsData.map((content, idx) => {
          const key = keyMaker();
          return (
            <S.DropDownList
              key={key}
              idx={idx}
              onClick={() => {
                setAssignee(content);
              }}
            >
              <S.DropDownContent>
                <S.SmallAcountImg src={content.profileImage} />
                {content.name}
              </S.DropDownContent>
              <I.offCheckCircle />
            </S.DropDownList>
          );
        });
      case '레이블':
        contentsData = labelsData;
        return contentsData.map((content, idx) => {
          const key = keyMaker();
          return (
            <S.DropDownList
              key={key}
              idx={idx}
              onClick={() => {
                setLabels(content);
              }}
            >
              <S.DropDownContent>
                <Label title={content.title} color={content.color} />
              </S.DropDownContent>
              <I.offCheckCircle />
            </S.DropDownList>
          );
        });
      case '마일스톤':
        contentsData = mileStonesData;
        return contentsData.map((content, idx) => {
          const key = keyMaker();
          return (
            <S.DropDownList
              key={key}
              idx={idx}
              onClick={() => {
                setMileStone(content);
              }}
            >
              <S.DropDownContent>{content.title}</S.DropDownContent>
              <I.offCheckCircle />
            </S.DropDownList>
          );
        });
      default:
        throw new Error(`해당 ${subject}는 유효하지 않은 타이틀입니다`);
    }
  }
  function toggleDropdown() {
    setIsClicked(!isClicked);
  }
  return (
    <S.PlusFigure
      onClick={() => {
        toggleDropdown();
      }}
    >
      <I.plus />
      <S.DropdownPanel isClicked={isClicked}>
        <S.DropDownTop>{subject} 추가</S.DropDownTop>
        <S.DropDownBottom>{getDropDownContents(subject)}</S.DropDownBottom>
      </S.DropdownPanel>
    </S.PlusFigure>
  );
}

export default DropDown;
