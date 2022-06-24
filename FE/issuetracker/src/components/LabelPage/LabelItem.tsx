import * as I from 'design/icons';
import * as S from 'components/LabelPage/styled/styled.labelItem';
import { LabelType } from 'context/label';
import Label from 'components/common/Common';

type LabelItemType = {
  label: LabelType;
  isLastList: boolean;
  isNewLabel: boolean;
};

function LabelItem({ label, isLastList, isNewLabel }: LabelItemType) {
  const labelListButton = !isNewLabel ? (
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
  ) : (
    ''
  );
  return (
    <S.labelList isLastList={isLastList}>
      <S.LabelListLeft>
        <S.labelImageWrapper>
          <Label color={label.color} title={label.title} />
        </S.labelImageWrapper>
        <S.labelListDescription>{label.description}</S.labelListDescription>
      </S.LabelListLeft>
      {labelListButton}
    </S.labelList>
  );
}
export default LabelItem;
