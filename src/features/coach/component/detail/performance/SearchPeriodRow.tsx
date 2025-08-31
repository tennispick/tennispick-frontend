import RangeCalendar from '@widgets/RangeCalendar';

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
    <div className="flex items-center gap-[2vw] mb-6">
      <div className="w-[10vw]">조회 기간</div>
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
