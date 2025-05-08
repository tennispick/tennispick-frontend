import Select from 'src/이전 파일들/components/common/Select';
import { getMonthList, getYearList } from 'src/이전 파일들/utils/date';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

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
    <div
      className={flex({
        alignItems: 'center',
        gap: '2vw',
        margin: '0 0 24px 0',
      })}
    >
      <div className={css({ width: '10vw' })}>조회 기간</div>
      <Flex alignItems="center" gap="2">
        <Select
          className={css({ width: '116px' })}
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
          className={css({ width: '116px' })}
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
      </Flex>
    </div>
  );
};

export default SearchPeriodSelectRow;
