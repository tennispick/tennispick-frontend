import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { SetStateAction } from '@/types/index';
import { ScheduleType } from '@features/schedule/type/schedule.type';
import { css } from 'styled-system/css';

type Props = {
  allOnceSchedule: ScheduleType[];
  setAllOnceSchedule: SetStateAction<ScheduleType[]>;
  index: number;
  disabled: boolean;
};

const ScheduleModalRegularLessonAllOnceScheduleByDate = ({
  allOnceSchedule,
  setAllOnceSchedule,
  index,
  disabled,
}: Props) => {
  const today = new Date();

  const onChangeDateHandler = (date: Date, index: number) => {
    const targetSchedule = allOnceSchedule[index];

    setAllOnceSchedule((prev) => {
      const newSchedule = [...prev];
      newSchedule[index] = {
        ...targetSchedule,
        date: date as Date,
      };
      return newSchedule;
    });
  };

  return (
    <DatePicker
      locale={ko}
      showIcon
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 16 18"
          fill="none"
          className={css({ zIndex: 99 })}
        >
          <path
            d="M2.16667 17.3334C1.70833 17.3334 1.31597 17.1702 0.989583 16.8438C0.663194 16.5174 0.5 16.1251 0.5 15.6667V4.00008C0.5 3.54175 0.663194 3.14939 0.989583 2.823C1.31597 2.49661 1.70833 2.33341 2.16667 2.33341H3V0.666748H4.66667V2.33341H11.3333V0.666748H13V2.33341H13.8333C14.2917 2.33341 14.684 2.49661 15.0104 2.823C15.3368 3.14939 15.5 3.54175 15.5 4.00008V15.6667C15.5 16.1251 15.3368 16.5174 15.0104 16.8438C14.684 17.1702 14.2917 17.3334 13.8333 17.3334H2.16667ZM2.16667 15.6667H13.8333V7.33341H2.16667V15.6667ZM2.16667 5.66675H13.8333V4.00008H2.16667V5.66675Z"
            fill="#626262"
          />
        </svg>
      }
      className={css({
        width: '100%',
        padding: '10px 0px 10px 32px !important',
        border: '1px solid var(--grey300)',
        borderRadius: '8px',
        fontSize: '0.875rem',
      })}
      dateFormat="yyyy.MM.dd"
      selected={allOnceSchedule[index].date}
      minDate={today}
      onChange={(date: Date) => onChangeDateHandler(date, index)}
      disabled={disabled}
    />
  );
};

export default ScheduleModalRegularLessonAllOnceScheduleByDate;
