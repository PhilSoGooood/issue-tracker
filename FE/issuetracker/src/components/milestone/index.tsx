/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';
import * as I from 'design/icons';
import * as S from 'components/milestone/styled/styled.index';
import * as L from 'components/LabelPage/styled/styled.labelList';
import LabelAndMileStoneBtns from 'components/common/LabelAndMileStoneBtns';
import MileStone from 'components/milestone/MileStone';
import NewMileStone from 'components/milestone/NewMileStone';
import { keyMaker } from 'utils/util';
import { useGetData } from 'APIs/Api';
import { MileStoneType } from 'data';

function MileStonePage() {
  const [isAddButtonClicked, setAddButtonClick] = useState(false);
  const { data, status } = useGetData(
    'milestones',
    'https://8fe3cd27-6f2c-47dd-8182-62d896d6f37e.mock.pstmn.io/milestones',
  );
  const mileStonesData: MileStoneType[] = data;

  const handleButtonClick = () => {
    setAddButtonClick(!isAddButtonClicked);
  };

  return (
    <S.MileStonePageWrapper>
      <LabelAndMileStoneBtns
        isAddButtonClicked={isAddButtonClicked}
        handleAddButtonClick={handleButtonClick}
        handleCloseButtonClick={handleButtonClick}
      />
      {isAddButtonClicked && <NewMileStone isNewMileStone setEditButtonClick={() => {}} />}
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
        {status === 'success' &&
          mileStonesData.map((mileStone, idx) => {
            const key: string = keyMaker();
            return <MileStone key={key} idx={idx} mileStoneData={mileStone} />;
          })}
      </L.labelListLayout>
    </S.MileStonePageWrapper>
  );
}

export default MileStonePage;
