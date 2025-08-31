import React from 'react';
import CheckboxGroup from '@widgets/CheckboxGroup';

type CheckboxType = {
  id: string;
  value: string | number;
};

type Props = {
  checkList: Array<CheckboxType>;
  checkedItems: Array<string>;
  handleAllCheckboxClick: () => void;
  handleCheckboxClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LessonStatusTypeRow = ({
  checkList,
  checkedItems,
  handleAllCheckboxClick,
  handleCheckboxClick,
}: Props) => {
  return (
    <div className="flex items-center gap-6 mb-6">
      <div className="w-28">수강 상태</div>
      <CheckboxGroup
        checkList={checkList}
        checkedItems={checkedItems}
        allCheckboxHandler={handleAllCheckboxClick}
        checkboxHandler={handleCheckboxClick}
      />
    </div>
  );
};

export default LessonStatusTypeRow;
