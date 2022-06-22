import * as I from 'design/icons';
import * as S from 'components/Issue/styled.issueSidebar';
import userImageURL from 'assets/images/UserImageLarge.svg';
import userImageURL2 from 'assets/images/UserImageLarge2.svg';
import { ProgressBar } from 'components/common/Common';

function IssueSidebar() {
  return (
    <S.sidebarWrapper>
      <S.sidebar>
        <S.userBar>
          <S.barHeader>
            <S.barHeaderText>작성자</S.barHeaderText>
            <I.plus />
          </S.barHeader>
          <S.userUnit>
            <img src={userImageURL} alt={userImageURL} />
            <S.userName>Oni</S.userName>
          </S.userUnit>
          <S.userUnit>
            <img src={userImageURL2} alt={userImageURL2} />
            <S.userName>Daniel</S.userName>
          </S.userUnit>
        </S.userBar>
        <S.labelBar>
          <S.barHeader>
            <S.barHeaderText>레이블</S.barHeaderText>
            <I.plus />
          </S.barHeader>
          <S.label>documentation</S.label>
        </S.labelBar>
        <S.milestoneBar>
          <S.barHeader>
            <S.barHeaderText>마일스톤</S.barHeaderText>
            <I.plus />
          </S.barHeader>
          <ProgressBar />
          <S.milstoneContent>마스터즈 코스</S.milstoneContent>
        </S.milestoneBar>
      </S.sidebar>
      <S.buttonWrapper>
        <S.deleteButton>
          <I.trash />
          <S.deleteButtonText>이슈 삭제</S.deleteButtonText>
        </S.deleteButton>
      </S.buttonWrapper>
    </S.sidebarWrapper>
  );
}
export default IssueSidebar;
