import * as I from 'design/icons';
import * as S from 'components/Issue/styled/issueLabel';

interface Props {
  isIssueClosed: boolean;
}

function IssueLabel({ isIssueClosed }: Props) {
  const issueLabelIcon = isIssueClosed ? <I.archive /> : <I.alertCircle />;
  const issueLabelText = isIssueClosed ? '닫힌 이슈' : '열린 이슈';

  return (
    <S.issueLabel isIssueClosed={isIssueClosed}>
      {issueLabelIcon}
      <S.labelText>{issueLabelText}</S.labelText>
    </S.issueLabel>
  );
}

export default IssueLabel;
