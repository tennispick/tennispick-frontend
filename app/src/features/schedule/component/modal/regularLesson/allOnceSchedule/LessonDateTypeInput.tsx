import CalendarBlackIcon from '@icons/calendar_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../Input';
import { SetStateAction } from 'app/src/types/index';
import { AllOnceFormDataProps } from 'app/src/features/schedule/type/regularLesson';
import { LessonDateType } from 'app/src/features/lesson/type/lesson.type';
import { Flex } from 'styled-system/jsx';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

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
    <div className={css({ margin: '0 0 20px 0' })}>
      <Flex alignItems="center">
        <Image
          src={CalendarBlackIcon}
          alt="lessonDateType"
          width={20}
          height={20}
          className={css({ margin: '0 6px 0 0' })}
        />
        강습날짜 유형 선택
      </Flex>
      <div
        className={flex({
          alignItems: 'center',
          margin: '12px 0 0 0',
          padding: '0 0 0 2px',
        })}
      >
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
