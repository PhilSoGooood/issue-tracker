import { AccountImg } from 'components/common/Common';
import * as S from 'components/newIssue/styled.index';
import * as I from 'design/icons';
import AccountSrc from 'assets/images/UserImageLarge.svg';
import SideBar from 'components/common/Sidebar';
import { useRecoilValue } from 'recoil';
import { newIssueState } from 'store/newIssue';
import { usePostData } from 'APIs/Api';

function NewIssue() {
  const newIssueData = useRecoilValue(newIssueState);
  const assigneesData: number[] = newIssueData.assignees.map((assignee) => assignee.id);
  const labelsData: number[] = newIssueData.labels.map((label) => label.id);
  const data = {
    title: newIssueData.title,
    content: newIssueData.comments,
    writerId: newIssueData.writer.id,
    assignees: assigneesData,
    labels: labelsData,
    milestone: newIssueData.milestone.id,
  };

  const mutation = usePostData(
    'https://8fe3cd27-6f2c-47dd-8182-62d896d6f37e.mock.pstmn.io/issue/new',
    data,
  );
  function postData() {
    mutation.mutate(data);
  }
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
        <SideBar data={newIssueData} />
      </S.NewIssueContent>
      <S.UnderLine />
      <S.Buttons>
        <I.cross />
        <S.CancelText>작성 취소</S.CancelText>
        <S.CompleteBtn
          onClick={() => {
            postData();
          }}
        >
          완료
        </S.CompleteBtn>
      </S.Buttons>
    </S.NewIssueWrap>
  );
}

export default NewIssue;
