import * as I from 'design/icons';
import * as S from 'components/common/LabelAndMileStoneBtns/styled/styled.EditAndDeleteBtn';

interface Props {
  elementId: string;
  handleEditButtonClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleDeleteButtonClick: () => void;
}

function EditAndDeleteBtn({ elementId, handleEditButtonClick, handleDeleteButtonClick }: Props) {
  return (
    <S.labelListButtonWrapper>
      <S.labelEditButton id={elementId} onClick={handleEditButtonClick}>
        <I.edit />
        <S.labelButtonText>편집</S.labelButtonText>
      </S.labelEditButton>
      <S.labelDeleteButton onClick={handleDeleteButtonClick}>
        <I.edit />
        <S.labelButtonText>삭제</S.labelButtonText>
      </S.labelDeleteButton>
    </S.labelListButtonWrapper>
  );
}

export default EditAndDeleteBtn;
