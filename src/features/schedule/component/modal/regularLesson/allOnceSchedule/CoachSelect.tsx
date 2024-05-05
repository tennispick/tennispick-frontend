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
    <div css={{ margin: '0 0 20px 0' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={CoachBlackIcon}
          alt="coach"
          width={20}
          height={20}
          css={{ margin: '0 6px 0 0' }}
        />
        코치 선택
      </div>
      <div css={{ width: ' 80%', margin: '12px 0 0 0', padding: '0 0 0 2px' }}>
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
