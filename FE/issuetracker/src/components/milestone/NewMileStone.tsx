import { useRecoilState } from 'recoil';
import * as S from 'components/milestone/styled/styled.newMileStone';
import MileStoneInput from 'components/milestone/MileStoneInput';
import SaveButton from 'components/common/SaveButton';
import { mileStone } from 'context/milestone';

function NewMileStone() {
  const [mileStoneState, setMileStoneState] = useRecoilState(mileStone);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setMileStoneState({
      ...mileStoneState,
      [name]: value,
    });
  };

  const handleSaveButtonClick = () => {
    // 추후에 mileStoneState 데이터를 POST 요청할 것
    console.log(mileStoneState);
  };

  return (
    <S.newMileStoneWrapper>
      <S.Title>새로운 마일스톤 추가</S.Title>
      <S.inputTopWrapper>
        <MileStoneInput
          inputName="title"
          labelText="제목"
          placeholder="마일스톤 이름"
          handleInputChange={handleInputChange}
        />
        <MileStoneInput
          inputName="dueDate"
          labelText="완료일(선택)"
          placeholder="완료일(선택) ex. YYYY-MM-DD"
          handleInputChange={handleInputChange}
        />
      </S.inputTopWrapper>
      <MileStoneInput
        inputName="description"
        labelText="설명(선택)"
        placeholder="설명(선택)"
        handleInputChange={handleInputChange}
      />
      <SaveButton buttonText="완료" margin="24px 0 0 0" handleButtonClick={handleSaveButtonClick} />
    </S.newMileStoneWrapper>
  );
}
export default NewMileStone;
