import { css } from 'styled-system/css';
import ModalSearchPeriod from './ModalSearchPeriod';
import ModalSearchCondition from './ModalSearchCondition';
import { useState, MouseEvent } from 'react';
import ModalSalesLists from './ModalSalesLists';
import {
  SearchConditionType,
  quickButtonPeriodData,
  searchConditions,
} from '@features/coach/data/salesModalData';

type Props = {
  coachId: string;
};

const ModalBody = ({ coachId }: Props) => {
  const [checkedItem, setCheckedItem] = useState(
    quickButtonPeriodData[0].value,
  );
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchCondition, setSearchCondition] = useState<SearchConditionType>(
    searchConditions[0].value,
  );
  const [keyword, setKeyword] = useState<string>('');

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const handleSearchOption = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchCondition(e.target.value);

  const handleCheckedChange = (e: MouseEvent<HTMLLabelElement>) => {
    const value = e.currentTarget.htmlFor;
    setCheckedItem(value);
  };

  const handleChangeStartDate = (date: Date) => {
    if (date > endDate) setEndDate(date);

    setStartDate(date);
  };

  const handleChangeEndDate = (date: Date) => setEndDate(date);

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
        data={quickButtonPeriodData}
        checkedItem={checkedItem}
        startDate={startDate}
        endDate={endDate}
        handleCheckedChange={handleCheckedChange}
        handleChangeStartDate={handleChangeStartDate}
        handleChangeEndDate={handleChangeEndDate}
      />
      <ModalSearchCondition
        searchCondition={searchCondition}
        searchConditions={searchConditions}
        handleChangeKeyword={handleChangeKeyword}
        handleSearchOption={handleSearchOption}
      />
      {/* TODO Filter */}
      <ModalSalesLists
        checkedItem={checkedItem}
        coachId={coachId}
        startDate={startDate}
        endDate={endDate}
        searchCondition={searchCondition}
        keyword={keyword}
      />
    </div>
  );
};

export default ModalBody;
