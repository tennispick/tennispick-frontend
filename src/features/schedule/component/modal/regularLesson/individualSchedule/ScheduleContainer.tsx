import { LessonDateType } from '@features/lesson/type/lesson.type';
import { DayType } from '@features/schedule/type/schedule.type';
import ScheduleByDate from './ScheduleByDate';
import ScheduleByDay from './ScheduleByDay';
import { SetStateAction } from '@/types/index';
import { IndividualFormDataProps } from '@features/schedule/type/regularLesson';
import { getDayOfThisWeek } from '@utils/date';
import StartTimeSelect from './StartTimeSelect';
import EndTimeSelect from './EndTimeSelect';

type Props = {
  index: number;
  lessonDateType: LessonDateType;
  lessonTime: string;
  schedule: {
    date: Date;
    day: DayType;
    startTime: string;
    endTime: string;
  };
  setFormData: SetStateAction<IndividualFormDataProps[]>;
  disabled: boolean;
};

const ScheduleModalRegularLessonIndividualScheduleContainer = ({
  index,
  lessonDateType,
  lessonTime,
  schedule,
  setFormData,
  disabled,
}: Props) => {
  const { date, day, startTime } = schedule;

  const onChangeDateHandler = (date: Date) => {
    setFormData((prev) => {
      const newFormData = [...prev];
      newFormData[index] = {
        ...newFormData[index],
        date: date as Date,
      };
      return newFormData;
    });
  };

  const onChangeDayHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prev) => {
      const newFormData = [...prev];
      newFormData[index] = {
        ...newFormData[index],
        date: getDayOfThisWeek(value as DayType),
        day: value as DayType,
      };
      return newFormData;
    });
  };

  const onChangeTimeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newFormData = [...prev];
      newFormData[index] = {
        ...newFormData[index],
        [name]: value,
      };
      return newFormData;
    });
  };

  return (
    <>
      {
        {
          date: (
            <ScheduleByDate
              date={date}
              onChangeHandler={onChangeDateHandler}
              disabled={disabled}
            />
          ),
          day: (
            <ScheduleByDay
              day={day}
              onChangeHandler={onChangeDayHandler}
              disabled={disabled}
            />
          ),
        }[lessonDateType]
      }
      <StartTimeSelect
        startTime={startTime}
        onChangeHandler={onChangeTimeHandler}
        disabled={disabled}
      />
      <EndTimeSelect
        index={index}
        startTime={startTime}
        lessonTime={lessonTime}
        setFormData={setFormData}
        disabled={disabled}
      />
    </>
  );
};

export default ScheduleModalRegularLessonIndividualScheduleContainer;
