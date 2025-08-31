import React from 'react';
import Select from '@/shared/components/common/Select';
import { getMonthList, getYearList } from 'src/shared/utils/date';

type Props = {
  year: number;
  month: string | number;
  handleYearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleMonthChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SearchPeriodSelectRow = ({
  year,
  month,
  handleYearChange,
  handleMonthChange,
}: Props) => {
  return (
    <div className="flex items-center gap-[2vw] mb-6">
      <div className="w-[10vw]">조회 기간</div>
      <div className="flex items-center gap-2">
        <Select
          className="w-[116px]"
          onChange={handleYearChange}
          defaultValue={year}
        >
          {getYearList(2015).yearArray.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </Select>
        <Select
          className="w-[116px]"
          onChange={handleMonthChange}
          defaultValue={month}
        >
          {getMonthList().monthArray.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export default SearchPeriodSelectRow;
