import LabelTop from 'components/LabelPage/LabelTop';
import LabelList from 'components/LabelPage/LabelList';

function LabelPage() {
  const isLabelPage = window.location.href === `http://localhost:3000/label`;
  return (
    <>
      <LabelTop $activeLabel={isLabelPage} />
      <LabelList />
    </>
  );
}
export default LabelPage;
