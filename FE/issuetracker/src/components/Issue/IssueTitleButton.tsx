import * as S from 'components/Issue/styled/issueTitleButton';

function IssueTitleButton({
  buttonIcon,
  buttonText,
  buttonState,
  handleButtonClick,
}: {
  buttonIcon: React.ReactNode;
  buttonText: '편집 취소' | '편집 완료' | '제목 편집' | '다시 열기' | '이슈 닫기' | '취소';
  buttonState: 'default' | 'active';
  handleButtonClick: () => void;
}) {
  return (
    <S.issueButton buttonState={buttonState} onClick={handleButtonClick}>
      {buttonIcon}
      <S.buttonText>{buttonText}</S.buttonText>
    </S.issueButton>
  );
}
export default IssueTitleButton;
