import CalendarBlackIcon from '@icons/calendar_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../Input';
import { CommonDataProps } from 'app/src/features/schedule/type/regularLesson';
import { SetStateAction } from 'app/src/types/index';
import { LessonType } from 'app/src/features/lesson/type/lesson.type';
import { Flex } from 'styled-system/jsx';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  lessonType: LessonType;
  setCommonData: SetStateAction<CommonDataProps>;
};

const ScheduleModalRegularLessonCommonScheduleLessonTypeInput = ({
  lessonType,
  setCommonData,
}: Props) => {
  const onChangeLessonTypeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCommonData((prev: CommonDataProps) => ({
      ...prev,
      lessonType: e.target.value as LessonType,
    }));
  };

  return (
    <div className={css({ margin: '0 0 20px 0' })}>
      <Flex alignItems="center">
        <Image
          src={CalendarBlackIcon}
          alt="lessonType"
          width={20}
          height={20}
          className={css({ margin: '0 6px 0 0' })}
        />
        레슨유형 선택
      </Flex>
      <div
        className={flex({
          alignItems: 'center',
          margin: '12px 0 0 0',
          padding: '0 0 0 2px',
        })}
      >
        <ScheduleModalInput
          id="private"
          type="radio"
          name="lessonType"
          label="개인레슨"
          value="private"
          onChange={onChangeLessonTypeHandler}
          checked={lessonType === 'private'}
        />
        <ScheduleModalInput
          id="group"
          type="radio"
          name="lessonType"
          label="그룹레슨"
          value="group"
          onChange={onChangeLessonTypeHandler}
          checked={lessonType === 'group'}
        />
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonCommonScheduleLessonTypeInput;
