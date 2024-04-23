import CalendarBlackIcon from '@icons/calendar_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../Input';
import { SetStateAction } from '@/types/index';
import { AllOnceFormDataProps } from '@features/schedule/type/regularLesson';
import { LessonDateType } from '@features/lesson/type/lesson.type';

type Props = {
  setFormData: SetStateAction<AllOnceFormDataProps>;
};

const ScheduleModalRegularLessonAllOnceScheduleLessonDateTypeInput = ({
  setFormData,
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
    <div css={{ margin: '0 0 20px 0' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={CalendarBlackIcon}
          alt="lessonDateType"
          width={20}
          height={20}
          css={{ margin: '0 6px 0 0' }}
        />
        강습날짜 유형 선택
      </div>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          margin: '12px 0 0 0',
          padding: '0 0 0 2px',
        }}
      >
        <ScheduleModalInput
          id="date"
          type="radio"
          name="lessonDateType"
          label="날짜로 선택"
          value="date"
          onChange={onChangeScheduleLessonDateTypeHandler}
          defaultChecked
        />
        <ScheduleModalInput
          id="day"
          type="radio"
          name="lessonDateType"
          label="요일로 선택"
          value="day"
          onChange={onChangeScheduleLessonDateTypeHandler}
        />
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonAllOnceScheduleLessonDateTypeInput;
