/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import * as I from 'design/icons';
import * as S from 'components/milestone/styled/styled.milestone';
import { ProgressBar } from 'components/common/Common';
import EditAndDeleteBtn from 'components/common/LabelAndMileStoneBtns/EditAndDeleteBtn';
import NewMileStone from 'components/milestone/NewMileStone';
import { mileStone } from 'store/milestone';
import { convertPercent } from 'utils/util';
import { MileStoneType } from 'data';
import { usePostData } from 'APIs/Api';

interface Props {
  idx: number;
  mileStoneData: MileStoneType;
}

function MileStone({ idx, mileStoneData }: Props) {
  const [mileStoneState, setMileStoneState] = useRecoilState(mileStone);
  const [isEditButtonClick, setEditButtonClick] = useState(false);
  const percent = convertPercent(mileStoneData.progress);
  const mutation = usePostData(
    'https://8fe3cd27-6f2c-47dd-8182-62d896d6f37e.mock.pstmn.io/milestone/new',
    mileStoneState,
  );

  const handleEditButtonClick = () => {
    setEditButtonClick(true);
  };

  const handleCloseButtonClick = () => {
    const updatedMileStoneState = {
      ...mileStoneState,
      closed: true,
    };
    setMileStoneState(updatedMileStoneState);
    mutation.mutate(mileStoneState);
  };

  return (
    <>
      <S.MileStoneWrap idx={idx}>
        <S.MileStoneTop>
          <S.MileStoneTopLeft>
            <S.MileStoneIconFigure>
              <I.milestone />
            </S.MileStoneIconFigure>
            <S.Title>{mileStoneData.title}</S.Title>
            <S.DueDate>
              <I.calendar />
              {mileStoneData.dueDate}
            </S.DueDate>
          </S.MileStoneTopLeft>
          <S.MileStoneTopRight>
            <S.CloseMileStone onClick={handleCloseButtonClick}>
              <I.milestone />
              닫기
            </S.CloseMileStone>
            <EditAndDeleteBtn
              elementId={mileStoneData.id.toString()}
              handleEditButtonClick={handleEditButtonClick}
              handleDeleteButtonClick={() => {}}
            />
          </S.MileStoneTopRight>
        </S.MileStoneTop>
        <S.MileStoneBottom>
          <S.Discription>{mileStoneData.description}</S.Discription>
          <S.MileStoneProgressBar>
            <ProgressBar percent={percent} />
            <S.ProgressStatus>
              <S.CompleteRate>{percent}%</S.CompleteRate>
              <S.IssueStatus>
                열린 이슈 {mileStoneData.openedIssue} 닫힌 이슈 {mileStoneData.closedIssue}
              </S.IssueStatus>
            </S.ProgressStatus>
          </S.MileStoneProgressBar>
        </S.MileStoneBottom>
      </S.MileStoneWrap>
      {isEditButtonClick && (
        <NewMileStone
          isNewMileStone={false}
          mileStoneData={mileStoneData}
          setEditButtonClick={setEditButtonClick}
        />
      )}
    </>
  );
}

export default MileStone;
