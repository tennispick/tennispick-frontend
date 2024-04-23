import CalendarBlackIcon from '@icons/calendar_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../Input';
import { SetStateAction } from '@/types/index';
import { AllOnceFormDataProps } from '@features/schedule/type/regularLesson';

type Props = {
  setFormData: SetStateAction<AllOnceFormDataProps>;
};

const ScheduleModalRegularLessonAllOnceScheduleLessonTimeInput = ({
  setFormData,
}: Props) => {
  const onChangeScheduleLessonTimeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData((prev: AllOnceFormDataProps) => ({
      ...prev,
      lessonTimeType: e.target.value,
    }));
  };

  return (
    <div css={{ margin: '0 0 20px 0' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={CalendarBlackIcon}
          alt="lessonTimeType"
          width={20}
          height={20}
          css={{ margin: '0 6px 0 0' }}
        />
        강습시간 선택
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
          id="default"
          type="radio"
          name="lessonTimeType"
          label="수강권 시간"
          value="default"
          onChange={onChangeScheduleLessonTimeHandler}
          defaultChecked
        />
        <ScheduleModalInput
          id="20"
          type="radio"
          name="lessonTimeType"
          label="20분"
          value="20"
          onChange={onChangeScheduleLessonTimeHandler}
        />
        <ScheduleModalInput
          id="30"
          type="radio"
          name="lessonTimeType"
          label="30분"
          value="30"
          onChange={onChangeScheduleLessonTimeHandler}
        />
        <ScheduleModalInput
          id="40"
          type="radio"
          name="lessonTimeType"
          label="40분"
          value="40"
          onChange={onChangeScheduleLessonTimeHandler}
        />
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonAllOnceScheduleLessonTimeInput;
