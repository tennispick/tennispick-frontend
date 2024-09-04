import RangeCalendar from '@widgets/RangeCalendar';
import { useState } from 'react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

const SearchPeriodRow = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChangeStartDate = (date: Date) => {
    if (date > endDate) setEndDate(date);

    setStartDate(date);
  };
  const handleChangeEndDate = (date: Date) => setEndDate(date);

  return (
    <div
      className={flex({
        alignItems: 'center',
        gap: '1.5rem',
        margin: '0 0 24px 0',
      })}
    >
      <div className={css({ width: '7rem' })}>조회 기간</div>
      <RangeCalendar
        startDate={startDate}
        endDate={endDate}
        handleChangeStartDate={handleChangeStartDate}
        handleChangeEndDate={handleChangeEndDate}
      />
    </div>
  );
};

export default SearchPeriodRow;
