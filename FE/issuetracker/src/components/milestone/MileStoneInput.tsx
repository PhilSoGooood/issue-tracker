import * as S from 'components/milestone/styled/styled.mileStoneInput';

interface Props {
  inputName: string;
  labelText: string;
  placeholder: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function MileStoneInput({ inputName, labelText, placeholder, handleInputChange }: Props) {
  return (
    <S.inputWrapper>
      <S.inputLabel>{labelText}</S.inputLabel>
      <S.input name={inputName} placeholder={placeholder} onChange={handleInputChange} />
    </S.inputWrapper>
  );
}
export default MileStoneInput;
