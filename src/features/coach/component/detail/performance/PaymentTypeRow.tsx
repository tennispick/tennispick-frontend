import CheckboxGroup from '@widgets/CheckboxGroup';

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
    <div className="flex items-center gap-[2vw] mb-6">
      <div className="w-[10vw]">결제 유형</div>
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
