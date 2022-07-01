import * as S from 'components/common/Sidebar/styled';
import { newIssueType } from 'store/newIssue';
import AssigneesContents from 'components/common/Sidebar/AssigneesContents';
import DropDown from 'components/common/Sidebar/Dropdown';
import LabelsContents from 'components/common/Sidebar/LabelsContents';
import { AccountType, LabelType, MileStoneType } from 'data';
import MileStoneContents from 'components/common/Sidebar/MileStoneContents';

function SideBar({ data }: { data: newIssueType }) {
  const {
    assignees,
    milestone,
    labels,
  }: { assignees: Array<AccountType>; milestone: MileStoneType; labels: Array<LabelType> } = data;
  const first = true;
  type SubjectsType = '담당자' | '레이블' | '마일스톤';
  const subjects: Array<SubjectsType> = ['담당자', '레이블', '마일스톤'];

  return (
    <S.AdditionalContents>
      <S.AdditionalContent first={first}>
        <S.ContentTitleAndButton>
          담당자
          <DropDown subject={subjects[0]} />
        </S.ContentTitleAndButton>
        <AssigneesContents assignees={assignees} />
      </S.AdditionalContent>
      <S.AdditionalContent first={!first}>
        <S.ContentTitleAndButton>
          레이블
          <DropDown subject={subjects[1]} />
        </S.ContentTitleAndButton>
        <LabelsContents labels={labels} />
      </S.AdditionalContent>
      <S.AdditionalContent first={!first}>
        <S.ContentTitleAndButton>
          마일스톤
          <DropDown subject={subjects[2]} />
        </S.ContentTitleAndButton>
        <MileStoneContents milestone={milestone} />
      </S.AdditionalContent>
    </S.AdditionalContents>
  );
}
export default SideBar;
