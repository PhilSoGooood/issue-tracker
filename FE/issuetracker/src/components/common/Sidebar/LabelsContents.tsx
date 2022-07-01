import * as S from 'components/common/Sidebar/styled';
import { LabelType } from 'data';
import { keyMaker } from 'utils/util';
import Label from 'components/common/Common';

function LabelsContent({ labels }: { labels: Array<LabelType> }) {
  const labelContents =
    labels[0].title !== ''
      ? labels.map((label) => {
          const key = keyMaker();
          return <Label key={key} color={label.color} title={label.title} />;
        })
      : '';
  return <S.Status>{labelContents}</S.Status>;
}

export default LabelsContent;
