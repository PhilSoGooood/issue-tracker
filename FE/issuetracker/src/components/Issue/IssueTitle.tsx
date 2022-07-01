import { useRecoilState } from 'recoil';
import { useState } from 'react';

import * as I from 'design/icons';
import * as S from 'components/Issue/styled/issueTitle';

import IssueTitleButton from 'components/Issue/IssueTitleButton';
import IssueTitleContent from 'components/Issue/IssueTitleContent';
import IssueTitleInput from 'components/Issue/IssueTitleInput';
import { issueState } from 'store/issue';
import { calculateInterval, getNowISOString } from 'utils/util';

function IssueTitle() {
  const [issueData, setIssueData] = useRecoilState(issueState);
  const [isEditable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const startEdit = () => {
    setEditable(true);
  };

  const cancleEdit = () => {
    setInputValue('');
    setEditable(false);
  };

  const saveInputValue = () => {
    const updatedIssueData = {
      ...issueData,
      title: inputValue,
    };
    setIssueData(updatedIssueData);
    setInputValue('');
    setEditable(false);
  };

  const writeIssueLog = (isClosed: boolean) => {
    const interval = calculateInterval(issueData.writtenTime);
    const log = `이 이슈가 ${interval}초 전에 ${issueData.writer.name}에 의해 `;
    const issueStateText = isClosed ? '닫혔습니다' : '열렸습니다';
    return log + issueStateText;
  };

  const toggleIssueState = () => {
    const updatedIssueData = {
      ...issueData,
      writtenTime: getNowISOString(),
      log: writeIssueLog(issueData.closed),
      closed: !issueData.closed,
    };
    setIssueData(updatedIssueData);
  };

  return (
    <S.issueTitleWrapper>
      {isEditable ? (
        <IssueTitleInput inputValue={inputValue} setInputValue={setInputValue} />
      ) : (
        <IssueTitleContent />
      )}
      {isEditable ? (
        <S.buttonWrapper>
          <IssueTitleButton
            buttonIcon={<I.cross />}
            buttonText="편집 취소"
            buttonState="default"
            handleButtonClick={cancleEdit}
          />
          <IssueTitleButton
            buttonIcon={<I.edit />}
            buttonText="편집 완료"
            buttonState="active"
            handleButtonClick={saveInputValue}
          />
        </S.buttonWrapper>
      ) : (
        <S.buttonWrapper>
          <IssueTitleButton
            buttonIcon={<I.edit />}
            buttonText="제목 편집"
            buttonState="default"
            handleButtonClick={startEdit}
          />
          <IssueTitleButton
            buttonIcon={issueData.closed ? <I.alertCircle /> : <I.archive />}
            buttonText={issueData.closed ? '다시 열기' : '이슈 닫기'}
            buttonState="default"
            handleButtonClick={toggleIssueState}
          />
        </S.buttonWrapper>
      )}
    </S.issueTitleWrapper>
  );
}
export default IssueTitle;
