import * as I from 'design/icons';
import * as S from 'components/milestone/styled/styled.milestone';
import { ProgressBar } from 'components/common/Common';
import EditAndDeleteBtn from 'components/common/LabelAndMileStoneBtns/EditAndDeleteBtn';
import { mileStoneType } from 'context/milestone';
import { calculatePercent } from 'utils/util';

interface Props {
  idx: number;
  mileStone: mileStoneType;
}

function MileStone({
  idx,
  mileStone: { title, dueDate, description, progress, openedIssue, closedIssue },
}: Props) {
  const percent = calculatePercent(progress);
  return (
    <S.MileStoneWrap idx={idx}>
      <S.MileStoneTop>
        <S.MileStoneTopLeft>
          <S.MileStoneIconFigure>
            <I.milestone />
          </S.MileStoneIconFigure>
          <S.Title>{title}</S.Title>
          <S.DueDate>
            <I.calendar />
            {dueDate}
          </S.DueDate>
        </S.MileStoneTopLeft>
        <S.MileStoneTopRight>
          <S.CloseMileStone>
            <I.milestone />
            닫기
          </S.CloseMileStone>
          <EditAndDeleteBtn />
        </S.MileStoneTopRight>
      </S.MileStoneTop>
      <S.MileStoneBottom>
        <S.Discription>{description}</S.Discription>
        <S.MileStoneProgressBar>
          <ProgressBar percent={percent} />
          <S.ProgressStatus>
            <S.CompleteRate>{percent}%</S.CompleteRate>
            <S.IssueStatus>
              열린 이슈 {openedIssue} 닫힌 이슈 {closedIssue}
            </S.IssueStatus>
          </S.ProgressStatus>
        </S.MileStoneProgressBar>
      </S.MileStoneBottom>
    </S.MileStoneWrap>
  );
}

export default MileStone;
