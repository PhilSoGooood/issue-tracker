import * as I from 'design/icons';
import * as S from 'components/Issue/styled/issueTitleButton';
import IssueTitleButton from 'components/Issue/buttons/IssueTitleButton';

interface Props {
  clickHandler1: () => void;
  clickHandler2: () => void;
}

function CancleAndSaveButtons({ clickHandler1, clickHandler2 }: Props) {
  return (
    <S.buttonWrapper>
      <IssueTitleButton
        buttonIcon={<I.cross />}
        buttonText="편집 취소"
        buttonState="default"
        clickHandler={clickHandler1}
      />
      <IssueTitleButton
        buttonIcon={<I.edit />}
        buttonText="편집 완료"
        buttonState="active"
        clickHandler={clickHandler2}
      />
    </S.buttonWrapper>
  );
}

export default CancleAndSaveButtons;
