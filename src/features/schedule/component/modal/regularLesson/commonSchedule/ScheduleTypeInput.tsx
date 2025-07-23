import CalendarBlackIcon from '@icons/calendar_black.svg';
import Image from 'next/image';
import ScheduleModalInput from '../../Input';
import { SetStateAction } from '@/types/index';
import { CommonDataProps } from '@features/schedule/type/regularLesson';
import { ScheduleInputType } from '@features/schedule/type/schedule.type';

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
    <div className="mb-5">
      <div className="flex items-center">
        <Image
          src={CalendarBlackIcon}
          alt="scheduleType"
          width={20}
          height={20}
          className="mr-1.5"
        />
        스케줄 등록유형 선택
      </div>
      <div className="flex items-center mt-3 pl-0.5">
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