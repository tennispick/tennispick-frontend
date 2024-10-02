import RangeCalendar from '@widgets/RangeCalendar';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  startDate: Date;
  endDate: Date;
  handleChangeStartDate: (date: Date) => void;
  handleChangeEndDate: (date: Date) => void;
};

const SearchPeriodRow = ({
  startDate,
  endDate,
  handleChangeStartDate,
  handleChangeEndDate,
}: Props) => {
  return (
    <div
      className={flex({
        alignItems: 'center',
        gap: '2vw',
        margin: '0 0 24px 0',
      })}
    >
      <div className={css({ width: '10vw' })}>조회 기간</div>
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
