import React, { useState } from 'react';
import * as S from 'components/Issue/styled/issueTitleInput';

interface Props {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
}

function IssueTitleInput({ inputValue, setInputValue }: Props) {
  const [isInputFocused, setInputFocus] = useState(false);

  const onFocus = () => {
    setInputFocus(true);
  };

  const onBlur = () => {
    setInputFocus(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <S.titleInputWrapper isInputFocused={isInputFocused} onFocus={onFocus} onBlur={onBlur}>
      <S.titleInputLabel>제목</S.titleInputLabel>
      <S.titleInput value={inputValue} onChange={onChange} />
    </S.titleInputWrapper>
  );
}
export default IssueTitleInput;
