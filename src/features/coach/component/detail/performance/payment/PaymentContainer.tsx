import PaymentTypeRow from '../PaymentTypeRow';
import SearchPeriodRow from '../SearchPeriodRow';
import InformationIcon from '@icons/information';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';
import useCenterPaymentSettingStore from '@lib/zustand/center';
import Incentive from './Incentive';
import EstimatedReceipt from './EstimatedReceipt';
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

const PaymentContainer = () => {

  // TODO: Implement the logic to fetch the payment list
  const {
    salary,
    totalSalesOption,
    totalSales,
    individualSalesOption,
    individualSales,
    settlementRateOption,
    settlementRate,
    vatOption,
    insuranceOption
  } = useCenterPaymentSettingStore();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [checkedItems, setCheckedItems] = useState<Array<string>>(
    checkList.map((item) => item.id),
  );

  const handleChangeStartDate = (date: Date) => {
    if (date > endDate) setEndDate(date);

    setStartDate(date);
  };

  const handleChangeEndDate = (date: Date) => setEndDate(date);

  const handleAllCheckboxClick = () => {
    if (checkedItems.length === checkList.length) setCheckedItems([]);
    else setCheckedItems(checkList.map((item) => item.id));
  };

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const checked = target.checked;
    const id = target.id;

    if (checked) setCheckedItems((prev) => [...prev, id]);
    else setCheckedItems((prev) => prev.filter((item) => item !== id));
  };

  return (
    <>
      <SearchPeriodRow
        startDate={startDate}
        endDate={endDate}
        handleChangeStartDate={handleChangeStartDate}
        handleChangeEndDate={handleChangeEndDate}
      />
      <PaymentTypeRow
        checkList={checkList}
        checkedItems={checkedItems}
        handleAllCheckboxClick={handleAllCheckboxClick}
        handleCheckboxClick={handleCheckboxClick}
      />
      <InfoField>
        <InfoLabel>월 기본 급여</InfoLabel>
        <div>3,000,000 원</div>
      </InfoField>
      <InfoField>
        <InfoLabel className={css({ fontWeight: 600 })}>지급 인센티브</InfoLabel>
        <div>300,000 원</div>
      </InfoField>
      <Incentive
        totalSalesOption={totalSalesOption}
        totalSales={totalSales}
        individualSalesOption={individualSalesOption}
        individualSales={individualSales}
      />
      <InfoField>
        <InfoLabel className={css({ fontWeight: 600 })}>00월 예상 수령액</InfoLabel>
        <div>4,000,000 원</div>
      </InfoField>
      <EstimatedReceipt
        salary={salary}
        totalSalesOption={totalSalesOption}
        totalSales={totalSales}
        individualSalesOption={individualSalesOption}
        individualSales={individualSales}
        settlementRateOption={settlementRateOption}
        settlementRate={settlementRate}
        vatOption={vatOption}
        insuranceOption={insuranceOption}
      />
      <div
        className={flex({
          height: '56px',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'var(--blue1200)',
          color: 'var(--blue500)',
          borderRadius: '0.5rem',
          fontWeight: 600,
          padding: '0 1rem',
          cursor: 'pointer',
        })}
      >
        <InformationIcon fill={'var(--blue500)'} />
        {'정산내역 상세보기 >'}
      </div>
    </>
  );
};

const InfoField = styled('div', {
  base: {
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    gap: '2vw',
    margin: '0 0 12px 0',
  },
});
const InfoLabel = styled('div', {
  base: {
    width: '10vw',
  },
});

export default PaymentContainer;
