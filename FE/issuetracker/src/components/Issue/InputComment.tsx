import { useState } from 'react';
import { useRecoilState } from 'recoil';

import * as I from 'design/icons';
import * as S from 'components/Issue/styled/inputComment';
import SaveButton from 'components/common/SaveButton';

import userImageURL from 'assets/images/UserImageLarge.svg';
import { issueState } from 'context/issue';
import { calculateInterval } from 'utils/util';

function InputComment() {
  const [issueData, setIssueData] = useRecoilState(issueState);
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const focusOnComment = () => {
    setIsInputActive(true);
  };

  const focusOutComment = () => {
    setIsInputActive(false);
  };

  const changeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const saveComment = () => {
    const newComment = {
      writer: issueData.writer,
      log: `${calculateInterval(issueData.writtenTime)}초 전`,
      description: inputValue,
    };
    const updatedIssueData = {
      ...issueData,
      comments: [...issueData.comments, newComment],
    };
    setIssueData(updatedIssueData);
    setInputValue('');
  };

  return (
    <S.inputComment>
      <S.commentWrapper>
        <S.commentUserImage>
          <img src={userImageURL} alt="user-icon-img" />
        </S.commentUserImage>
        <S.comment isInputActive={isInputActive} onFocus={focusOnComment} onBlur={focusOutComment}>
          <S.textArea
            placeholder="코멘트를 입력하세요"
            value={inputValue}
            onChange={changeComment}
          />
          <S.attachFileButtonWrapper>
            <S.attachFileButton>
              <I.paperclip />
              <S.attachFileButtonText>파일 첨부하기</S.attachFileButtonText>
            </S.attachFileButton>
          </S.attachFileButtonWrapper>
        </S.comment>
      </S.commentWrapper>
      <SaveButton buttonText="완료" margin="0 0 0 60px" handleButtonClick={saveComment} />
    </S.inputComment>
  );
}
export default InputComment;
