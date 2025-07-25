import Button from '@/shared/components/common/Button';
import { addDays } from 'src/shared/utils/date';

type Props = {
  calendarDate: Date;
  handleChangeDate: (date: Date) => void;
};

const DateButtonContainer = ({ calendarDate, handleChangeDate }: Props) => {
  const handleWeekClick = (days: number) => {
    const currentDayOfWeek = calendarDate.getDay();
    const mondayDate = new Date(calendarDate);
    mondayDate.setDate(
      calendarDate.getDate() -
        currentDayOfWeek +
        (currentDayOfWeek === 0 ? -6 : 1),
    );

    handleChangeDate(addDays(mondayDate, days));
  };

  return (
    <div className="flex gap-2">
      <Button
        size="sm"
        variant={'outline'}
        label={'이전'}
        onClick={() => handleWeekClick(-7)}
      />
      <Button
        size="sm"
        variant={'outline'}
        label={'다음'}
        onClick={() => handleWeekClick(7)}
      />
    </div>
  );
};

export default DateButtonContainer;
