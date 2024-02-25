import { Button } from '@components/index';
import { CalendarWhiteIcon } from '@icons/index';
import { addDays } from '@utils/date';
import { SetStateAction } from '@/types/index';

type Props = {
  calendarDate: Date;
  setCalendarDate: SetStateAction<Date>;
  setModalType: SetStateAction<string>;
  setShowModal: SetStateAction<boolean>;
};

const ButtonContainer = ({
  calendarDate,
  setCalendarDate,
  setModalType,
  setShowModal,
}: Props) => {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '16px 0',
      }}
    >
      <ButtonContainer.PrevNextWeekContainer
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
      />
      <ButtonContainer.CreateLessonContainer
        setModalType={setModalType}
        setShowModal={setShowModal}
      />
    </div>
  );
};

const PrevNextWeekContainer = ({
  calendarDate,
  setCalendarDate,
}: Pick<Props, 'calendarDate' | 'setCalendarDate'>) => {
  const handleWeekClick = (days: number) => {
    const currentDayOfWeek = calendarDate.getDay();
    const mondayDate = new Date(calendarDate);
    mondayDate.setDate(
      calendarDate.getDate() -
        currentDayOfWeek +
        (currentDayOfWeek === 0 ? -6 : 1),
    );

    setCalendarDate(addDays(mondayDate, days));
  };

  return (
    <div css={{ display: 'flex' }}>
      <Button
        label="이전"
        onClick={() => handleWeekClick(-7)}
        css={{ minWidth: '100px', padding: '10px 16px', margin: '0 8px 0 0' }}
      />
      <Button
        label="다음"
        onClick={() => handleWeekClick(7)}
        css={{ minWidth: '100px', padding: '10px 16px' }}
      />
    </div>
  );
};

const CreateLessonContainer = ({
  setModalType,
  setShowModal,
}: Pick<Props, 'setModalType' | 'setShowModal'>) => {
  return (
    <div css={{ display: 'flex' }}>
      <Button
        variant={'iconBtn'}
        label={'일정 등록하기'}
        src={CalendarWhiteIcon}
        css={{
          backgroundColor: 'var(--business-active-color)',
          color: 'var(--white100)',
          margin: '0 8px 0 0',
        }}
        onClick={() => {
          setShowModal(true);
          setModalType('regular');
        }}
      />
      <Button
        variant={'iconBtn'}
        label={'보강 등록하기'}
        src={CalendarWhiteIcon}
        css={{
          backgroundColor: 'var(--business-active-color)',
          color: 'var(--white100)',
        }}
        onClick={() => {
          setShowModal(true);
          setModalType('additional');
        }}
      />
    </div>
  );
};

ButtonContainer.PrevNextWeekContainer = PrevNextWeekContainer;
ButtonContainer.CreateLessonContainer = CreateLessonContainer;

export default ButtonContainer;
