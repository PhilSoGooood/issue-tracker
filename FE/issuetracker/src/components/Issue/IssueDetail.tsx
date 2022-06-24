import { useRecoilValue } from 'recoil';
import * as S from 'components/Issue/styled/issueDetail';
import IssueLabel from 'components/Issue/IssueLabel';
import { issueState } from 'context/issue';

function IssueDetail() {
  const issueData = useRecoilValue(issueState);
  return (
    <S.issueDetailWrapper>
      <IssueLabel isIssueClosed={issueData.closed} />
      <S.issueDetail>
        {issueData.log} - 코멘트 {issueData.comments.length}개
      </S.issueDetail>
    </S.issueDetailWrapper>
  );
}
export default IssueDetail;
