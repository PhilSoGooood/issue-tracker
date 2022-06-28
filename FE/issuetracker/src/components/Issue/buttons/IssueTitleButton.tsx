import * as S from 'components/Issue/styled/issueTitleButton';

interface Props {
  buttonIcon: React.ReactNode;
  buttonText: string;
  buttonState: string;
  handleButtonClick: () => void;
}

function IssueTitleButton({ buttonIcon, buttonText, buttonState, handleButtonClick }: Props) {
  return (
    <S.issueButton buttonState={buttonState} onClick={handleButtonClick}>
      {buttonIcon}
      <S.buttonText>{buttonText}</S.buttonText>
    </S.issueButton>
  );
}
export default IssueTitleButton;
