import { useRecoilValue } from 'recoil';
import * as S from 'components/Issue/styled/issueDetail';
import IssueLabel from 'components/Issue/IssueLabel';
import { issueState } from 'store/issue';
import { calculateInterval } from 'utils/util';

function IssueDetail() {
  const issueData = useRecoilValue(issueState);

  const writeIssueLog = (isClosed: boolean) => {
    const interval = calculateInterval(issueData.writtenTime);
    const log = `이 이슈가 ${interval}초 전에 ${issueData.writer.name}에 의해 `;
    const issueStateText = isClosed ? '닫혔습니다' : '열렸습니다';
    return log + issueStateText;
  };

  const log = writeIssueLog(issueData.closed);
  return (
    <S.issueDetailWrapper>
      <IssueLabel isIssueClosed={issueData.closed} />
      <S.issueDetail>
        {log} - 코멘트 {issueData.comments.length}개
      </S.issueDetail>
    </S.issueDetailWrapper>
  );
}
export default IssueDetail;
