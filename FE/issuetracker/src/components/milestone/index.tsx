import * as I from 'design/icons';
import * as S from 'components/milestone/styled/styled.index';
import * as L from 'components/LabelPage/styled.labelList';
import { keyMaker } from 'utils/util';
import LabelAndMileStoneBtns from 'components/common/LabelAndMileStoneBtns';
import MileStone from './MileStone';

const mileStones: Array<string> = ['마일스톤 제목', '마스터즈 코스'];
const mileStoneList = mileStones.map((title, idx) => {
  const key: string = keyMaker();
  return <MileStone key={key} idx={idx} title={title} />;
});
function MileStonePage() {
  return (
    <S.MileStonePageWrapper>
      <LabelAndMileStoneBtns />
      <L.labelListLayout>
        <L.labelListTop>
          <S.MileStoneStatus>
            <S.OpenedMileStone>
              <I.milestone />
              열린 마일스톤(2)
            </S.OpenedMileStone>
            <S.ClosedMileStone>
              <I.archive />
              닫힌 마일스톤(0)
            </S.ClosedMileStone>
          </S.MileStoneStatus>
        </L.labelListTop>
        {mileStoneList}
      </L.labelListLayout>
    </S.MileStonePageWrapper>
  );
}

export default MileStonePage;
