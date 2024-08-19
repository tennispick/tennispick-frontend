import { useEffect, useRef } from 'react';

type CheckboxType = {
  id: string;
  value: string | number;
};

type Props = {
  checkList: Array<CheckboxType>;
  checkedItems: Array<string>;
  allCheckboxHandler: () => void;
  checkboxHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const getCheckboxState =
  (checkedItems: Array<string>) => (checkList: Array<CheckboxType>) => {
    if (checkedItems.length === 0) return 'none';
    if (checkedItems.length === checkList.length) return 'all';
    return 'indeterminate';
  };

const checkboxStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  margin: '0 8px 0 0',
};

const CheckboxGroup = ({
  checkList = [],
  checkedItems,
  allCheckboxHandler,
  checkboxHandler,
}: Props) => {
  const isAllchecked = checkedItems.length === checkList.length;
  const allCheckboxRef = useRef<HTMLInputElement>(null);
  const checkboxState = getCheckboxState(checkedItems)(checkList);

  useEffect(() => {
    if (allCheckboxRef.current === null) return;

    if (checkboxState === 'all') {
      allCheckboxRef.current.indeterminate = false;
      allCheckboxRef.current.checked = true;
    } else if (checkboxState === 'none') {
      allCheckboxRef.current.indeterminate = false;
      allCheckboxRef.current.checked = false;
    } else {
      allCheckboxRef.current.checked = false;
      allCheckboxRef.current.indeterminate = true;
    }
  });

  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div key={'all'} css={checkboxStyle}>
        <input
          ref={allCheckboxRef}
          type="checkbox"
          name={'all'}
          id={'all'}
          value={'all'}
          checked={isAllchecked}
          onChange={allCheckboxHandler}
        />
        <label htmlFor={'all'}>{'전체'}</label>
      </div>
      {checkList.map((item, index) => {
        return (
          <div key={index} css={checkboxStyle}>
            <input
              type="checkbox"
              id={item.id}
              value={item.value}
              checked={checkedItems.some((checked) => checked === item.id)}
              onChange={checkboxHandler}
            />
            <label htmlFor={item.id}>{item.value}</label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxGroup;
