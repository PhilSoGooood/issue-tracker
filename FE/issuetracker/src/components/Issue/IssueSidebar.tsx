import { useRecoilValue } from 'recoil';
import * as I from 'design/icons';
import * as S from 'components/Issue/styled/issueSidebar';
import { ProgressBar } from 'components/common/Common';
import { issueState } from 'context/issue';
import { calculatePercent } from 'utils/util';

function IssueSidebar() {
  const issueData = useRecoilValue(issueState);
  return (
    <S.sidebarWrapper>
      <S.sidebar>
        <S.userBar>
          <S.barHeader>
            <S.barHeaderText>작성자</S.barHeaderText>
            <I.plus />
          </S.barHeader>
          {issueData.assignees.map(({ id, imageUrl, name }) => (
            <S.userUnit key={id}>
              <img src={imageUrl} alt="assignee-icon-img" />
              <S.userName>{name}</S.userName>
            </S.userUnit>
          ))}
        </S.userBar>
        <S.labelBar>
          <S.barHeader>
            <S.barHeaderText>레이블</S.barHeaderText>
            <I.plus />
          </S.barHeader>
          {issueData.labels.map((label) => (
            <S.label
              key={label.id}
              color={label.color.font}
              backgroundColor={label.color.background}
            >
              {label.title}
            </S.label>
          ))}
        </S.labelBar>
        <S.milestoneBar>
          <S.barHeader>
            <S.barHeaderText>마일스톤</S.barHeaderText>
            <I.plus />
          </S.barHeader>
          <ProgressBar percent={calculatePercent(issueData.milestone.progress)} />
          <S.milstoneContent>{issueData.milestone.title}</S.milstoneContent>
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
