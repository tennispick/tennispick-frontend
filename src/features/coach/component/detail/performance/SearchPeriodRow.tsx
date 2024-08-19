import RangeCalendar from '@widgets/RangeCalendar';
import { useState } from 'react';

const SearchPeriodRow = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onChangeStartDateHandler = (date: Date) => {
    if (date > endDate) setEndDate(date);

    setStartDate(date);
  };
  const onChangeEndDateHandler = (date: Date) => setEndDate(date);

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        margin: '0 0 24px 0',
      }}
    >
      <div css={{ width: '7rem' }}>조회 기간</div>
      <RangeCalendar
        startDate={startDate}
        endDate={endDate}
        onChangeStartDateHandler={onChangeStartDateHandler}
        onChangeEndDateHandler={onChangeEndDateHandler}
      />
    </div>
  );
};

export default SearchPeriodRow;
