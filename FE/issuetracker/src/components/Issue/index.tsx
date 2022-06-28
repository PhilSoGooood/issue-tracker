import * as S from 'components/Issue/styled/index';
import IssueTitle from 'components/Issue/IssueTitle';
import IssueDetail from 'components/Issue/IssueDetail';
import IssueComments from 'components/Issue/IssueCommentSection';
import IssueSidebar from 'components/Issue/IssueSidebar';

function Issue() {
  return (
    <>
      <IssueTitle />
      <IssueDetail />
      <S.seperator />
      <S.issueContentWrapper>
        <IssueComments />
        <IssueSidebar />
      </S.issueContentWrapper>
    </>
  );
}

export default Issue;
