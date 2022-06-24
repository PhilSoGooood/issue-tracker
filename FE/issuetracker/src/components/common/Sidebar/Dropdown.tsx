import * as I from 'design/icons';
import * as S from 'components/common/Sidebar/styled/dropdown';
import { useState } from 'react';

type DropdownType = {
  subject: string;
};

function DropDown({ subject }: DropdownType) {
  const [isClicked, setIsClicked] = useState(false);
  function toggleDropdown() {
    setIsClicked(!isClicked);
  }
  return (
    <S.PlusFigure
      onClick={() => {
        toggleDropdown();
      }}
    >
      <I.plus />
      <S.DropdownPanel isClicked={isClicked}>
        <S.DropDownTop>{subject} 추가</S.DropDownTop>
      </S.DropdownPanel>
    </S.PlusFigure>
  );
}

export default DropDown;
