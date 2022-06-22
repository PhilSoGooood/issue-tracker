import { ProgressBar } from 'components/common/Common';
import EditAndDeleteBtn from 'components/common/LabelAndMileStoneBtns/EditAndDeleteBtn';
import * as S from 'components/milestone/styled/styled.milestone';
import * as I from 'design/icons';

type MileStoneType = {
  idx: number;
  title: string;
};

function MileStone({ idx, title }: MileStoneType) {
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
            완료일 일정
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
        <S.Discription>마일스톤 상세 설명</S.Discription>
        <S.MileStoneProgressBar>
          <ProgressBar />
          <S.ProgressStatus>
            <S.CompleteRate>50%</S.CompleteRate>
            <S.IssueStatus>열린 이슈 1 닫힌 이슈 1</S.IssueStatus>
          </S.ProgressStatus>
        </S.MileStoneProgressBar>
      </S.MileStoneBottom>
    </S.MileStoneWrap>
  );
}

export default MileStone;
