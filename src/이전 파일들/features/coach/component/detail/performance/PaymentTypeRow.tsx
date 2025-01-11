import CheckboxGroup from 'src/widgets/CheckboxGroup';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  checkList: Array<{ id: string; value: string }>;
  checkedItems: Array<string>;
  handleAllCheckboxClick: () => void;
  handleCheckboxClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PaymentTypeRow = ({
  checkList,
  checkedItems,
  handleAllCheckboxClick,
  handleCheckboxClick,
}: Props) => {
  return (
    <div
      className={flex({
        alignItems: 'center',
        gap: '2vw',
        margin: '0 0 24px 0',
      })}
    >
      <div className={css({ width: '10vw' })}>결제 유형</div>
      <CheckboxGroup
        checkList={checkList}
        checkedItems={checkedItems}
        allCheckboxHandler={handleAllCheckboxClick}
        checkboxHandler={handleCheckboxClick}
      />
    </div>
  );
};

export default PaymentTypeRow;
