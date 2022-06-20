import * as S from 'components/LabelPage/styled.labelList';
import { keyMaker } from 'utils/util';
import LabelItem from 'components/LabelPage/LabelItem';

const initialLabelList = [
  {
    title: '레이블 이름',
    color: '',
    description: '레이블에 대한 설명',
  },
  {
    title: 'Documentation',
    color: 'blue',
    description: '서비스에 대한 개선 사항 혹은 추가 사항',
  },
  {
    title: 'bug',
    color: 'red',
    description: '서비스에서 발생하는 오류들',
  },
];

function LabelList() {
  return (
    <S.labelListLayout>
      <S.labelListTop>
        <S.labelListTopText>3개의 레이블</S.labelListTopText>
      </S.labelListTop>
      <S.labelListWrapper>
        {initialLabelList.map((label, index) => {
          const key = keyMaker();
          const isLastList = index === initialLabelList.length - 1;
          return <LabelItem label={label} key={key} isLastList={isLastList} />;
        })}
      </S.labelListWrapper>
    </S.labelListLayout>
  );
}
export default LabelList;
