import Label, { AccountImg } from 'components/common/Common';
import accountsrc from 'assets/images/UserImageSmall.svg';
import * as S from 'components/IssueList/styled.issue';
import * as I from 'design/icons';

import { CheckBox } from 'components/IssueList/styled.issues';
import { PostIssueType } from 'store/issueList';
import { keyMaker } from 'utils/util';

function Issue({ data }: { data: PostIssueType }) {
  const labels = data.labels.map((label) => {
    const key = keyMaker();
    return <Label key={key} title={label.title} color={label.color} />;
  });
  return (
    <S.IssueWrap>
      <S.IssueLeft>
        <S.IssueTop>
          <CheckBox type="checkbox" />
          <S.AlertCircleFigure>
            <I.alertCircle />
          </S.AlertCircleFigure>
          <S.Title>{data.title}</S.Title>
          {labels}
        </S.IssueTop>
        <S.IssueBottom>
          <S.IssueBottomContent>{data.id}</S.IssueBottomContent>
          <S.IssueBottomContent>{data.writer.name}</S.IssueBottomContent>
          <S.IssueBottomContent>
            <I.milestone />
            {data.milestone.title}
          </S.IssueBottomContent>
        </S.IssueBottom>
      </S.IssueLeft>
      <AccountImg src={accountsrc} />
    </S.IssueWrap>
  );
}

export default Issue;
