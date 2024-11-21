import CalendarBlackIcon from '@icons/calendar_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../Input';
import { SetStateAction } from 'app/src/types/index';
import { CommonDataProps } from 'app/src/features/schedule/type/regularLesson';
import { ScheduleInputType } from 'app/src/features/schedule/type/schedule.type';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';

type Props = {
  setCommonData: SetStateAction<CommonDataProps>;
};

const ScheduleModalRegularLessonCommonScheduleTypeInput = ({
  setCommonData,
}: Props) => {
  const onChangeScheduleTypeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCommonData((prev: CommonDataProps) => ({
      ...prev,
      scheduleType: e.target.value as ScheduleInputType,
    }));
  };

  return (
    <div className={css({ margin: '0 0 20px 0' })}>
      <Flex alignItems="center">
        <Image
          src={CalendarBlackIcon}
          alt="scheduleType"
          width={20}
          height={20}
          className={css({ margin: '0 6px 0 0' })}
        />
        스케줄 등록유형 선택
      </Flex>
      <div
        className={flex({
          alignItems: 'center',
          margin: '12px 0 0 0',
          padding: '0 0 0 2px',
        })}
      >
        <ScheduleModalInput
          id="all"
          type="radio"
          name="scheduleType"
          label="일괄등록"
          value="all"
          onChange={onChangeScheduleTypeHandler}
          defaultChecked
        />
        <ScheduleModalInput
          id="individual"
          type="radio"
          name="scheduleType"
          label="개별등록"
          value="individual"
          onChange={onChangeScheduleTypeHandler}
        />
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonCommonScheduleTypeInput;
