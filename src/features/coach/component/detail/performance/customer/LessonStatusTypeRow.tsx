import CheckboxGroup from '@widgets/CheckboxGroup';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

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
    <div
      className={flex({
        alignItems: 'center',
        gap: '1.5rem',
        margin: '0 0 24px 0',
      })}
    >
      <div className={css({ width: '7rem' })}>수강 상태</div>
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
