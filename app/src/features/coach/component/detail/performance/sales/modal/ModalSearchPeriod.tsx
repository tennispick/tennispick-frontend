import RadioButtonGroup from 'app/src/widgets/RadioButtonGroup';
import RangeCalendar from 'app/src/widgets/RangeCalendar';
import { MouseEvent } from 'react';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  data: Array<{ label: string; value: string }>;
  checkedItem: string;
  handleCheckedChange: (e: MouseEvent<HTMLLabelElement>) => void;
  startDate: Date;
  endDate: Date;
  handleChangeStartDate: (date: Date) => void;
  handleChangeEndDate: (date: Date) => void;
};

const ModalSearchPeriod = ({
  data: initialData,
  checkedItem,
  handleCheckedChange,
  startDate,
  endDate,
  handleChangeStartDate,
  handleChangeEndDate,
}: Props) => {
  return (
    <div
      className={flex({
        alignItems: 'center',
        gap: '1.5rem',
        margin: '0 0 24px 0',
      })}
    >
      <div className={css({ width: '7rem' })}>조회 기간</div>
      <SearchQuickButton
        data={initialData}
        checkedItem={checkedItem}
        handleCheckedChange={handleCheckedChange}
      />
      <RangeCalendar
        startDate={startDate}
        endDate={endDate}
        handleChangeStartDate={handleChangeStartDate}
        handleChangeEndDate={handleChangeEndDate}
        disabled={checkedItem !== 'custom'}
      />
    </div>
  );
};

const SearchQuickButton = ({
  data: initialData,
  checkedItem,
  handleCheckedChange,
}: {
  data: Props['data'];
  checkedItem: string;
  handleCheckedChange: (e: MouseEvent<HTMLLabelElement>) => void;
}) => {
  return (
    <RadioButtonGroup
      data={initialData}
      name="searchQuick"
      checkedItem={checkedItem}
      handleCheckedChange={handleCheckedChange}
    />
  );
};

export default ModalSearchPeriod;
