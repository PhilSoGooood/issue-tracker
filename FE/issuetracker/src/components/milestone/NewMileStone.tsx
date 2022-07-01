/* eslint-disable @typescript-eslint/no-empty-function */
import { useRecoilState } from 'recoil';
import * as I from 'design/icons';
import * as S from 'components/milestone/styled/styled.newMileStone';
import MileStoneInput from 'components/milestone/MileStoneInput';
import SaveButton from 'components/common/SaveButton';
import { mileStone, initialMileStone, mileStoneType } from 'store/milestone';
import IssueTitleButton from 'components/Issue/IssueTitleButton';
import { usePostData } from 'APIs/Api';

interface Props {
  isNewMileStone: boolean;
  mileStoneData?: mileStoneType | undefined;
  setEditButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewMileStone({
  mileStoneData = initialMileStone,
  isNewMileStone,
  setEditButtonClick,
}: Props) {
  const [mileStoneState, setMileStoneState] = useRecoilState(mileStone);
  const title = mileStoneData?.title;
  const dueDate = mileStoneData?.dueDate;
  const description = mileStoneData?.description;

  const mutation = usePostData(
    'https://8fe3cd27-6f2c-47dd-8182-62d896d6f37e.mock.pstmn.io/milestone/new',
    mileStoneState,
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setMileStoneState({
      ...mileStoneState,
      [name]: value,
    });
  };

  const handleSaveButtonClick = () => {
    mutation.mutate(mileStoneState);
  };

  const handleCancleButtonClick = () => {
    setEditButtonClick(false);
  };

  return (
    <S.newMileStoneWrapper>
      <S.Title>{isNewMileStone ? '새로운 마일스톤 추가' : '마일스톤 편집'}</S.Title>
      <S.inputTopWrapper>
        <MileStoneInput
          inputName="title"
          labelText="제목"
          placeholder={title || '마일스톤 이름'}
          handleInputChange={handleInputChange}
        />
        <MileStoneInput
          inputName="dueDate"
          labelText="완료일(선택)"
          placeholder={dueDate || '완료일(선택) ex. YYYY-MM-DD'}
          handleInputChange={handleInputChange}
        />
      </S.inputTopWrapper>
      <MileStoneInput
        inputName="description"
        labelText="설명(선택)"
        placeholder={description || '설명(선택)'}
        handleInputChange={handleInputChange}
      />
      {mileStoneData && (
        <S.saveButtonWrapper>
          <SaveButton buttonText="완료" handleButtonClick={handleSaveButtonClick} />
          {!isNewMileStone && (
            <IssueTitleButton
              buttonIcon={<I.cross />}
              buttonText="취소"
              buttonState="default"
              handleButtonClick={handleCancleButtonClick}
            />
          )}
        </S.saveButtonWrapper>
      )}
    </S.newMileStoneWrapper>
  );
}
export default NewMileStone;
