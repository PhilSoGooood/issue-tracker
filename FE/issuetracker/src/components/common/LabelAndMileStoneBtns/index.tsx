import * as I from 'design/icons';
import * as S from 'components/common/LabelAndMileStoneBtns/styled/styled.index';

interface Props {
  isAddButtonClicked: boolean;
  handleAddButtonClick: () => void;
  handleCloseButtonClick: () => void;
}
function LabelAndMileStoneBtns({
  isAddButtonClicked,
  handleAddButtonClick,
  handleCloseButtonClick,
}: Props) {
  const isLabelPage: boolean = window.location.href === `http://localhost:3000/label`;
  return (
    <S.labelTop>
      <S.tabBar>
        <S.leftBar to="/label" $islabelpage={isLabelPage}>
          <I.tag />
          <S.LinkText>레이블</S.LinkText>
          <S.numberText>(3)</S.numberText>
        </S.leftBar>
        <S.rightBar to="/milestone" $islabelpage={isLabelPage}>
          <I.milestone />
          <S.LinkText>마일스톤</S.LinkText>
          <S.numberText>(2)</S.numberText>
        </S.rightBar>
      </S.tabBar>
      {isAddButtonClicked ? (
        <S.closeButton onClick={handleCloseButtonClick}>
          <I.cross />
          <S.buttonText>닫기</S.buttonText>
        </S.closeButton>
      ) : (
        <S.addButton onClick={handleAddButtonClick}>
          <I.plus />
          <S.buttonText>추가</S.buttonText>
        </S.addButton>
      )}
    </S.labelTop>
  );
}
export default LabelAndMileStoneBtns;
