import * as I from 'design/icons';
import * as S from 'components/common/SaveButton/styled.index';

interface Props {
  buttonText: string;
  handleButtonClick: () => void;
}

function SaveButton({ buttonText, handleButtonClick }: Props) {
  return (
    <S.saveCommentButton onClick={handleButtonClick}>
      <I.plus />
      <S.saveCommentButtonText>{buttonText}</S.saveCommentButtonText>
    </S.saveCommentButton>
  );
}
export default SaveButton;
