import CalendarBlackIcon from '@icons/calendar_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../Input';
import { CommonDataProps } from '@features/schedule/type/regularLesson';
import { SetStateAction } from '@/types/index';
import { LessonType } from '@features/lesson/type/lesson.type';

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
    <div className="mb-5">
      <div className="flex items-center">
        <Image
          src={CalendarBlackIcon}
          alt="lessonType"
          width={20}
          height={20}
          className="mr-1.5"
        />
        레슨유형 선택
      </div>
      <div className="flex items-center mt-3 pl-0.5">
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