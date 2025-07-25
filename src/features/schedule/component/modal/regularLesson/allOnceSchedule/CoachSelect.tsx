import Image from 'next/image';
import ScheduleModalSelect from '../../Select';
import CoachBlackIcon from '@icons/coach_black.svg';
import { ChangeEvent, useEffect, useState } from 'react';
import { CoachListData } from '@apis/coach/coach.type';
import { SetStateAction } from '@/types/index';
import { AllOnceFormDataProps } from '@features/schedule/type/regularLesson';

type Props = {
  coach: string;
  data: CoachListData[];
  setFormData: SetStateAction<AllOnceFormDataProps>;
  disabled: boolean;
};

const ScheduleModalRegularLessonAllOnceScheduleCoachSelect = ({
  coach,
  data,
  setFormData,
  disabled,
}: Props) => {
  const [coachId, setCoachId] = useState(coach);

  const transferCoachListFormat = (data: CoachListData[]) =>
    data.map(({ id, name }) => ({ value: `${id}`, label: name }));

  const onChangeCoachHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCoachId(value);
    setFormData((prev) => ({
      ...prev,
      coach: value,
    }));
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setFormData((prev) => ({
        ...prev,
        coach: data[0].id.toString(),
      }));
    }
  }, [data, setFormData]);

  useEffect(() => {
    setCoachId(coach);
  }, [coach]);

  return (
    <div className="mb-5">
      <div className="flex items-center">
        <Image
          src={CoachBlackIcon}
          alt="coach"
          width={20}
          height={20}
          className="mr-1.5"
        />
        코치 선택
      </div>
      <div className="w-4/5 mt-3 pl-0.5">
        <ScheduleModalSelect
          name="coach"
          data={
            data!.length > 0
              ? transferCoachListFormat(data!)
              : [{ value: '', label: '코치 선택' }]
          }
          selected={coachId}
          onChangeHandler={onChangeCoachHandler}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonAllOnceScheduleCoachSelect;
