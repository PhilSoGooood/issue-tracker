import * as S from 'components/common/Sidebar/styled';
import { ProgressBar } from 'components/common/Common';
import { MileStoneType } from 'data';

function MileStoneContents({ milestone }: { milestone: MileStoneType }) {
  const percent = (milestone.closedIssue / (milestone.openedIssue + milestone.closedIssue)) * 100;
  const mileStoneContent =
    milestone.title !== '' ? (
      <>
        <ProgressBar size="small" percent={percent} />
        {milestone.title}
      </>
    ) : (
      ''
    );
  return <S.Status>{mileStoneContent}</S.Status>;
}

export default MileStoneContents;
