import { useState } from 'react';
import * as I from 'design/icons';
import * as S from 'components/LabelPage/styled/styled.labelTop';
import NewLabelList from 'components/LabelPage/NewLabelList';

interface Props {
  $activeLabel: boolean;
}

function LabelTop({ $activeLabel }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const isNewLabel = true;
  function showLabel() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <S.labelTop>
        <S.tabBar>
          <S.leftBar to="/label" $activeLabel={$activeLabel}>
            <I.tag />
            <S.LinkText>레이블</S.LinkText>
            <S.numberText>(3)</S.numberText>
          </S.leftBar>
          <S.rightBar to="/milestone">
            <I.milestone />
            <S.LinkText>마일스톤</S.LinkText>
            <S.numberText>(2)</S.numberText>
          </S.rightBar>
        </S.tabBar>
        <S.addButton
          onClick={() => {
            showLabel();
          }}
        >
          <I.plus />
          <S.addButtonText>추가</S.addButtonText>
        </S.addButton>
      </S.labelTop>
      {isClicked && <NewLabelList isNewLabel={isNewLabel} />}
    </>
  );
}

export default LabelTop;
