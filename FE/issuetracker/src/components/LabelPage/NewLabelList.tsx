import * as I from 'design/icons';
import * as S from 'components/LabelPage/styled/styled.newLabelList';
import LabelItem from 'components/LabelPage/LabelItem';
import { useRecoilState } from 'recoil';
import { initialLabelState, labelState } from 'context/label';
import { useState } from 'react';

type LabelListType = {
  isNewLabel: boolean;
};

function NewLabelList({ isNewLabel }: LabelListType) {
  const [newLabel, setNewLabel] = useRecoilState(labelState);

  const [text, setText] = useState({
    title: '',
    description: '',
    color: '',
  });
  const { title, description, color } = text;
  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  function resetText() {
    setText({
      title: '',
      description: '',
      color: '',
    });
  }
  function makeNewLabelInfo(e: React.FocusEvent<HTMLInputElement, Element>) {
    const { value, name } = e.target;
    setNewLabel({
      ...newLabel,
      [name]: value,
    });
  }

  const resetNewLabelValue = () => {
    setNewLabel(initialLabelState);
    resetText();
  };
  return (
    <S.newLabelListWrapper>
      <LabelItem label={newLabel} key="key" isLastList={false} isNewLabel={isNewLabel} />
      <S.labelForm>
        <S.labelName>
          <span>Label name</span>
          <S.labelInput
            name="title"
            value={title}
            onChange={(e) => {
              changeText(e);
            }}
            onBlur={(e) => {
              makeNewLabelInfo(e);
            }}
          />
        </S.labelName>
        <S.labelDescription>
          <span>Description</span>
          <S.labelInput
            value={description}
            name="description"
            onBlur={(e) => {
              makeNewLabelInfo(e);
            }}
            onChange={(e) => {
              changeText(e);
            }}
          />
        </S.labelDescription>
        <S.labelColor>
          <span>Color</span>
          <S.labelColorController>
            <S.labelColorButton>
              <I.refresh />
              <S.labelInput
                value={color}
                name="color"
                onBlur={(e) => {
                  makeNewLabelInfo(e);
                }}
                onChange={(e) => {
                  changeText(e);
                }}
              />
            </S.labelColorButton>
          </S.labelColorController>
        </S.labelColor>
        <S.buttonsWrapper>
          <S.buttonWrapperTop>
            <S.deleteButton isNewLabel={isNewLabel}>
              <I.trash />
              삭제
            </S.deleteButton>
          </S.buttonWrapperTop>
          <S.buttonWrapperBottom>
            <S.cancleButton
              onClick={() => {
                resetNewLabelValue();
              }}
            >
              <I.cross />
              취소
            </S.cancleButton>
            <S.saveButton
              onClick={() => {
                alert('성공적으로 등록되었습니다');
              }}
            >
              <I.edit />
              완료
            </S.saveButton>
          </S.buttonWrapperBottom>
        </S.buttonsWrapper>
      </S.labelForm>
    </S.newLabelListWrapper>
  );
}
export default NewLabelList;
