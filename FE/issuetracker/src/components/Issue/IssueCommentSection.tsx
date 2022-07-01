import { useRecoilValue } from 'recoil';
import * as S from 'components/Issue/styled/issueCommentSection';
import IssueComment from 'components/Issue/IssueComment';
import InputComment from 'components/Issue/InputComment';
import { issueState } from 'store/issue';

function IssueCommentSection() {
  const issueData = useRecoilValue(issueState);
  return (
    <S.commentSection>
      {issueData.comments.map((comment) => (
        <IssueComment
          key={comment.writer.id}
          imageURL={comment.writer.profileImage}
          writerName={comment.writer.name}
          log={comment.writtenTime}
          description={comment.description}
        />
      ))}
      <InputComment />
    </S.commentSection>
  );
}
export default IssueCommentSection;
