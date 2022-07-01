import * as S from 'components/Issue/styled/index';
import IssueTitle from 'components/Issue/IssueTitle';
import IssueDetail from 'components/Issue/IssueDetail';
import IssueComments from 'components/Issue/IssueCommentSection';
import { useRecoilValue } from 'recoil';
import { issueState } from 'store/issue';
import SideBar from 'components/common/Sidebar';

function Issue() {
  const issueData = useRecoilValue(issueState);
  return (
    <>
      <IssueTitle />
      <IssueDetail />
      <S.seperator />
      <S.issueContentWrapper>
        <IssueComments />
        <SideBar data={issueData} />
      </S.issueContentWrapper>
    </>
  );
}

export default Issue;
