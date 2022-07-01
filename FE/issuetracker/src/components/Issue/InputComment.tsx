import { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';

import * as I from 'design/icons';
import * as S from 'components/Issue/styled/inputComment';
import SaveButton from 'components/common/SaveButton';

import userImageURL from 'assets/images/UserImageLarge.svg';
import { issueState } from 'store/issue';

function InputComment() {
  const [issueData, setIssueData] = useRecoilState(issueState);
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const focusOnComment = useCallback(() => {
    setIsInputActive(true);
  }, []);

  const focusOutComment = useCallback(() => {
    setIsInputActive(false);
  }, []);

  const changeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const saveComment = () => {
    const newComment = {
      writer: issueData.writer,
      writtenTime: issueData.writtenTime,
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
      <S.saveButtonWrapper>
        <SaveButton buttonText="완료" handleButtonClick={saveComment} />
      </S.saveButtonWrapper>
    </S.inputComment>
  );
}
export default InputComment;
