import * as S from 'components/common/Sidebar/styled';
import Label from 'components/common/Common';
import { LabelType } from 'data';
import { keyMaker } from 'utils/util';

function LabelsContents(labels: Array<LabelType>) {
  const labelContents =
    labels[0].title !== ''
      ? labels.map((label) => {
          const key = keyMaker();
          return <Label key={key} color={label.color} title={label.title} />;
        })
      : '';
  return <S.Status>{labelContents}</S.Status>;
}

export default LabelsContents;
