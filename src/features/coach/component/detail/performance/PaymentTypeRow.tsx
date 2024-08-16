import CheckboxGroup from '@widgets/CheckboxGroup';
import { useState } from 'react';

const checkList = [
  {
    id: 'accountTransfer',
    value: '계좌이체',
  },
  {
    id: 'card',
    value: '카드결제',
  },
  {
    id: 'cash',
    value: '현금결제',
  },
];

const PaymentTypeRow = () => {
  const [checkedItems, setCheckedItems] = useState<Array<string>>(
    checkList.map((item) => item.id),
  );

  const onChangeAllCheckboxHandler = () => {
    if (checkedItems.length === checkList.length) setCheckedItems([]);
    else setCheckedItems(checkList.map((item) => item.id));
  };

  const onChangeCheckboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const checked = target.checked;
    const id = target.id;

    if (checked) setCheckedItems((prev) => [...prev, id]);
    else setCheckedItems((prev) => prev.filter((item) => item !== id));
  };

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        margin: '0 0 24px 0',
      }}
    >
      <div css={{ width: '7rem' }}>결제 유형</div>
      <CheckboxGroup
        checkList={checkList}
        checkedItems={checkedItems}
        allCheckboxHandler={onChangeAllCheckboxHandler}
        checkboxHandler={onChangeCheckboxHandler}
      />
    </div>
  );
};

export default PaymentTypeRow;
