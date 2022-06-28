import { useState } from 'react';
import LabelAndMileStoneBtns from 'components/common/LabelAndMileStoneBtns';
import NewLabelList from 'components/LabelPage/NewLabelList';

function LabelTop() {
  const [isClicked, setIsClicked] = useState(false);
  const isNewLabel = true;
  const showLabel = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <LabelAndMileStoneBtns
        isAddButtonClicked={isClicked}
        handleAddButtonClick={showLabel}
        handleCloseButtonClick={showLabel}
      />
      {isClicked && <NewLabelList isNewLabel={isNewLabel} />}
    </>
  );
}

export default LabelTop;
