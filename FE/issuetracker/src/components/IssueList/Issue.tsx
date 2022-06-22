import Label, { AccountImg } from 'components/common/Common';

import * as S from 'components/IssueList/styled.issue';
import * as I from 'design/icons';

import AccountSrc from 'assets/images/UserImageLarge.svg';
import { CheckBox } from './styled.issues';

function Issue() {
  const title = 'FE';
  const color = 'blue';
  return (
    <S.IssueWrap>
      <S.IssueLeft>
        <S.IssueTop>
          <CheckBox type="checkbox" />
          <S.AlertCircleFigure>
            <I.alertCircle />
          </S.AlertCircleFigure>
          <S.Title>이슈 제목</S.Title>
          <Label title={title} color={color} />
        </S.IssueTop>
        <S.IssueBottom>
          <S.IssueBottomContent>#이슈번호</S.IssueBottomContent>
          <S.IssueBottomContent>작성자 및 타임스템프 정보</S.IssueBottomContent>
          <S.IssueBottomContent>
            <I.milestone />
            마일스톤
          </S.IssueBottomContent>
        </S.IssueBottom>
      </S.IssueLeft>
      <AccountImg src={AccountSrc} />
    </S.IssueWrap>
  );
}

export default Issue;
