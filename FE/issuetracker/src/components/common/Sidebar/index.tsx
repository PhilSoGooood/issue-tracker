import * as S from 'components/common/Sidebar/styled';
import DropDown from './Dropdown';

function SideBar() {
  const first = true;
  const subjects: Array<string> = ['담당자', '레이블', '마일스톤'];
  return (
    <S.AdditionalContents>
      <S.AdditionalContent first={first}>
        담당자
        <DropDown subject={subjects[0]} />
      </S.AdditionalContent>
      <S.AdditionalContent first={!first}>
        레이블
        <DropDown subject={subjects[1]} />
      </S.AdditionalContent>
      <S.AdditionalContent first={!first}>
        마일스톤
        <DropDown subject={subjects[2]} />
      </S.AdditionalContent>
    </S.AdditionalContents>
  );
}
export default SideBar;
