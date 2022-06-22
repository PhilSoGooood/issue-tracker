import * as I from 'design/icons';
import * as S from 'components/common/LabelAndMileStoneBtns/styled/styled.EditAndDeleteBtn';

function EditAndDeleteBtn() {
  return (
    <S.labelListButtonWrapper>
      <S.labelEditButton>
        <I.edit />
        <S.labelButtonText>편집</S.labelButtonText>
      </S.labelEditButton>
      <S.labelDeleteButton>
        <I.edit />
        <S.labelButtonText>삭제</S.labelButtonText>
      </S.labelDeleteButton>
    </S.labelListButtonWrapper>
  );
}

export default EditAndDeleteBtn;
