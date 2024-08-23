import Button from '@components/button/Button';
import { addDays } from '@utils/date';
import { Flex } from 'styled-system/jsx';

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
    <Flex gap="8px">
      <Button
        size="md"
        variant={'text'}
        label={'이전'}
        onClick={() => handleWeekClick(-7)}
      />
      <Button
        size="md"
        variant={'text'}
        label={'다음'}
        onClick={() => handleWeekClick(7)}
      />
    </Flex>
  );
};

export default DateButtonContainer;
