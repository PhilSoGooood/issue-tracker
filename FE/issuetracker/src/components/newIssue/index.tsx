import { AccountImg } from 'components/common/Common';
import * as S from 'components/newIssue/styled.index';
import * as I from 'design/icons';
import AccountSrc from 'assets/images/UserImageLarge.svg';
import SideBar from 'components/common/Sidebar';

function NewIssue() {
  return (
    <S.NewIssueWrap>
      <S.NewIssueTitle>새로운 이슈 작성</S.NewIssueTitle>
      <S.UnderLine />
      <S.NewIssueContent>
        <S.IssueContentLeft>
          <S.ImgAndTitle>
            <AccountImg src={AccountSrc} />
            <S.TitleInput placeholder="제목" />
          </S.ImgAndTitle>
          <S.InputArea>
            <S.NewIssueInput placeholder="코멘트를 입력하세요" />
            <S.AttatchFile>
              <I.paperclip />
              파일 첨부하기
            </S.AttatchFile>
          </S.InputArea>
        </S.IssueContentLeft>
        <SideBar />
      </S.NewIssueContent>
      <S.UnderLine />
      <S.Buttons>
        <I.cross />
        <S.CancelText>작성 취소</S.CancelText>
        <S.CompleteBtn>완료</S.CompleteBtn>
      </S.Buttons>
    </S.NewIssueWrap>
  );
}

export default NewIssue;
