/* eslint-disable @typescript-eslint/no-empty-function */
import * as S from 'components/LabelPage/styled/styled.labelItem';
import { LabelType } from 'store/label';
import Label from 'components/common/Common';
import EditAndDeleteBtn from 'components/common/LabelAndMileStoneBtns/EditAndDeleteBtn';

type LabelItemType = {
  label: LabelType;
  isLastList: boolean;
  isNewLabel: boolean;
};

function LabelItem({ label, isLastList, isNewLabel }: LabelItemType) {
  return (
    <S.labelList isLastList={isLastList}>
      <S.LabelListLeft>
        <S.labelImageWrapper>
          <Label color={label.color} title={label.title} />
        </S.labelImageWrapper>
        <S.labelListDescription>{label.description}</S.labelListDescription>
      </S.LabelListLeft>
      {!isNewLabel && (
        <EditAndDeleteBtn
          elementId=""
          handleEditButtonClick={() => {}}
          handleDeleteButtonClick={() => {}}
        />
      )}
    </S.labelList>
  );
}
export default LabelItem;
