import CalendarBlackIcon from '@icons/calendar_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../Input';
import { CommonDataProps } from '@features/schedule/type/regularLesson';
import { SetStateAction } from '@/types/index';
import { LessonType } from '@features/lesson/type/lesson.type';

type Props = {
  setCommonData: SetStateAction<CommonDataProps>;
};

const ScheduleModalRegularLessonCommonScheduleLessonTypeInput = ({
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
    <div css={{ margin: '0 0 20px 0' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={CalendarBlackIcon}
          alt="lessonType"
          width={20}
          height={20}
          css={{ margin: '0 6px 0 0' }}
        />
        레슨유형 선택
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
          id="private"
          type="radio"
          name="lessonType"
          label="개인레슨"
          value="private"
          onChange={onChangeLessonTypeHandler}
          defaultChecked
        />
        <ScheduleModalInput
          id="group"
          type="radio"
          name="lessonType"
          label="그룹레슨"
          onChange={onChangeLessonTypeHandler}
          value="group"
        />
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonCommonScheduleLessonTypeInput;
