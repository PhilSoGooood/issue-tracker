import * as I from 'design/icons';
import * as S from 'components/common/SaveButton/styled.index';

interface Props {
  buttonText: string;
  margin: string;
  handleButtonClick: () => void;
}

function SaveButton({ buttonText, margin, handleButtonClick }: Props) {
  return (
    <S.saveCommentButtonWrapper margin={margin}>
      <S.saveCommentButton onClick={handleButtonClick}>
        <I.plus />
        <S.saveCommentButtonText>{buttonText}</S.saveCommentButtonText>
      </S.saveCommentButton>
    </S.saveCommentButtonWrapper>
  );
}
export default SaveButton;
