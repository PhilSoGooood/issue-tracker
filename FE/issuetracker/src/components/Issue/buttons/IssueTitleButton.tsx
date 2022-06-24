import * as S from 'components/Issue/styled/issueTitleButton';

interface Props {
  buttonIcon: React.ReactNode;
  buttonText: string;
  buttonState: string;
  clickHandler: () => void;
}

function IssueTitleButton({ buttonIcon, buttonText, buttonState, clickHandler }: Props) {
  return (
    <S.issueButton buttonState={buttonState} onClick={clickHandler}>
      {buttonIcon}
      <S.buttonText>{buttonText}</S.buttonText>
    </S.issueButton>
  );
}
export default IssueTitleButton;
