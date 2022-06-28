import { useRecoilValue } from 'recoil';
import * as S from 'components/Issue/styled/issueTitleContent';
import { issueState } from 'context/issue';

function IssueTitleContent() {
  const issueData = useRecoilValue(issueState);
  return (
    <>
      <S.issueTitle>{issueData.title}</S.issueTitle>
      <S.issueNumber>#{issueData.id}</S.issueNumber>
    </>
  );
}

export default IssueTitleContent;
