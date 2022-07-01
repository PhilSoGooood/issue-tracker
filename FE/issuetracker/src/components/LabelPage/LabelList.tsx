import * as S from 'components/LabelPage/styled/styled.labelList';
import { keyMaker } from 'utils/util';
import LabelItem from 'components/LabelPage/LabelItem';
import { useGetData } from 'APIs/Api';

type LabelType = {
  id?: number;
  title: string;
  color: string;
  description: string;
};

function LabelList() {
  const { data, status } = useGetData(
    'labels',
    'https://8fe3cd27-6f2c-47dd-8182-62d896d6f37e.mock.pstmn.io/labels',
  );
  const labelData: LabelType[] = data;
  return (
    <S.labelListLayout>
      <S.labelListTop>
        <S.labelListTopText>3개의 레이블</S.labelListTopText>
      </S.labelListTop>
      <S.labelListWrapper>
        {status === 'success' &&
          labelData.map((label, index) => {
            const key = keyMaker();
            const isLastList = index === labelData.length - 1;
            return <LabelItem label={label} key={key} isLastList={isLastList} isNewLabel={false} />;
          })}
      </S.labelListWrapper>
    </S.labelListLayout>
  );
}
export default LabelList;
