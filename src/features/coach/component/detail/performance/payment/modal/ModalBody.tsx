import { css } from 'styled-system/css';
import ModalSearchPeriod from './ModalSearchPeriod';
import { quickButtonPeriodData } from '@features/coach/data/paymentModalData';
import { useState } from 'react';
import ModalReceipt from './ModalReceipt';

const ModalBody = () => {
  const [checkedItem, setCheckedItem] = useState(
    quickButtonPeriodData[0].value,
  );

  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setYear(Number(e.target.value));

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMonth(Number(e.target.value));

  return (
    <div
      className={css({
        height: 'calc(100% - 66px)',
        backgroundColor: 'var(--white100)',
        borderRadius: '8px',
        padding: '24px',
      })}
    >
      <ModalSearchPeriod
        year={year}
        month={month}
        handleYearChange={handleYearChange}
        handleMonthChange={handleMonthChange}
      />
      <ModalReceipt />
    </div>
  );
};

export default ModalBody;
