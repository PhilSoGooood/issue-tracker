import * as I from 'design/icons';
import * as S from 'components/Issue/styled/issueComment';
import { calculateInterval } from 'utils/util';

interface Props {
  imageURL: string;
  writerName: string;
  log: string;
  description: string;
}

function IssueComment({ imageURL, writerName, log, description }: Props) {
  const interval = calculateInterval(log);
  return (
    <S.commentArticle>
      <S.commentUserImage>
        <img src={imageURL} alt="writer-icon-img" />
      </S.commentUserImage>
      <S.comment>
        <S.commentHeader>
          <S.commentHeaderLeft>
            <S.userName>{writerName}</S.userName>
            <S.timeStamp>{interval}초 전</S.timeStamp>
          </S.commentHeaderLeft>
          <S.commentHeaderRight>
            <S.writeBadge>작성자</S.writeBadge>
            <S.editButton>
              <I.edit />
              편집
            </S.editButton>
            <S.emoticon>
              <I.smile />
            </S.emoticon>
          </S.commentHeaderRight>
        </S.commentHeader>
        <S.commentContent>{description}</S.commentContent>
      </S.comment>
    </S.commentArticle>
  );
}

export default IssueComment;
