import CalendarBlackIcon from '@icons/calendar_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../Input';
import { SetStateAction } from 'src/이전 파일들/types/index';
import { AllOnceFormDataProps } from '@/이전 파일들/features/schedule/type/regularLesson';
import { Flex } from 'styled-system/jsx';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  lessonTime: string;
  setFormData: SetStateAction<AllOnceFormDataProps>;
  disabled: boolean;
};

const ScheduleModalRegularLessonAllOnceScheduleLessonTimeInput = ({
  lessonTime,
  setFormData,
  disabled,
}: Props) => {
  const onChangeScheduleLessonTimeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData((prev: AllOnceFormDataProps) => ({
      ...prev,
      lessonTime: e.target.value,
    }));
  };

  return (
    <div className={css({ margin: '0 0 20px 0' })}>
      <Flex alignItems="center">
        <Image
          src={CalendarBlackIcon}
          alt="lessonTime"
          width={20}
          height={20}
          className={css({ margin: '0 6px 0 0' })}
        />
        강습시간 선택
      </Flex>
      <div
        className={flex({
          alignItems: 'center',
          margin: '12px 0 0 0',
          padding: '0 0 0 2px',
        })}
      >
        <ScheduleModalInput
          id="default"
          type="radio"
          name="lessonTime"
          label="수강권 시간"
          value="default"
          onChange={onChangeScheduleLessonTimeHandler}
          checked={lessonTime === 'default'}
          disabled={disabled}
        />
        <ScheduleModalInput
          id="20"
          type="radio"
          name="lessonTime"
          label="20분"
          value="20"
          onChange={onChangeScheduleLessonTimeHandler}
          checked={lessonTime === '20'}
          disabled={disabled}
        />
        <ScheduleModalInput
          id="30"
          type="radio"
          name="lessonTime"
          label="30분"
          value="30"
          onChange={onChangeScheduleLessonTimeHandler}
          checked={lessonTime === '30'}
          disabled={disabled}
        />
        <ScheduleModalInput
          id="40"
          type="radio"
          name="lessonTime"
          label="40분"
          value="40"
          onChange={onChangeScheduleLessonTimeHandler}
          checked={lessonTime === '40'}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonAllOnceScheduleLessonTimeInput;
