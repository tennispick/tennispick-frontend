import CalendarBlackIcon from '@icons/calendar_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../Input';
import { SetStateAction } from '@/types/index';
import { AllOnceFormDataProps } from '@features/schedule/type/regularLesson';
import { LessonDateType } from '@features/lesson/type/lesson.type';

type Props = {
  lessonDateType: LessonDateType;
  setFormData: SetStateAction<AllOnceFormDataProps>;
  disabled: boolean;
};

const ScheduleModalRegularLessonAllOnceScheduleLessonDateTypeInput = ({
  lessonDateType,
  setFormData,
  disabled,
}: Props) => {
  const onChangeScheduleLessonDateTypeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData((prev: AllOnceFormDataProps) => ({
      ...prev,
      lessonDateType: e.target.value as LessonDateType,
    }));
  };

  return (
    <div className="mb-5">
      <div className="flex items-center">
        <Image
          src={CalendarBlackIcon}
          alt="lessonDateType"
          width={20}
          height={20}
          className="mr-1.5"
        />
        강습날짜 유형 선택
      </div>
      <div className="flex items-center mt-3 pl-0.5">
        <ScheduleModalInput
          id="date"
          type="radio"
          name="lessonDateType"
          label="날짜로 선택"
          value="date"
          onChange={onChangeScheduleLessonDateTypeHandler}
          checked={lessonDateType === 'date'}
          disabled={disabled}
        />
        <ScheduleModalInput
          id="day"
          type="radio"
          name="lessonDateType"
          label="요일로 선택"
          value="day"
          onChange={onChangeScheduleLessonDateTypeHandler}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonAllOnceScheduleLessonDateTypeInput;