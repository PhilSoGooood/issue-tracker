import * as I from 'design/icons';
import * as S from 'components/common/LabelAndMileStoneBtns/styled/styled.index';

function LabelAndMileStoneBtns() {
  const isLabelPage = window.location.href === `http://localhost:3000/label`;
  return (
    <S.labelTop>
      <S.tabBar>
        <S.leftBar to="/label" isLabelPage={isLabelPage}>
          <I.tag />
          <S.LinkText>레이블</S.LinkText>
          <S.numberText>(3)</S.numberText>
        </S.leftBar>
        <S.rightBar to="/milestone" isLabelPage={isLabelPage}>
          <I.milestone />
          <S.LinkText>마일스톤</S.LinkText>
          <S.numberText>(2)</S.numberText>
        </S.rightBar>
      </S.tabBar>
      <S.addButton>
        <I.plus />
        <S.addButtonText>추가</S.addButtonText>
      </S.addButton>
    </S.labelTop>
  );
}
export default LabelAndMileStoneBtns;
