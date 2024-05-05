import Image from 'next/image';
import ScheduleModalSelect from '../../Select';
import CourtBlackIcon from '@icons/court_black.svg';
import { CourtListData } from '@apis/court/court.type';
import { ChangeEvent, useEffect, useState } from 'react';
import { SetStateAction } from '@/types/index';
import { AllOnceFormDataProps } from '@features/schedule/type/regularLesson';

type Props = {
  court: string;
  data: CourtListData[];
  setFormData: SetStateAction<AllOnceFormDataProps>;
  disabled: boolean;
};

const ScheduleModalRegularLessonAllOnceScheduleCourtSelect = ({
  court,
  data,
  setFormData,
  disabled,
}: Props) => {
  const [courtId, setCourtId] = useState(court);

  const transferCourtListFormat = (data: CourtListData[]) =>
    data.map(({ id, name }) => ({ value: `${id}`, label: name }));

  const onChangeCourtHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCourtId(value);
    setFormData((prev) => ({
      ...prev,
      court: value,
    }));
  };

  useEffect(() => {
    if (data && data.length > 0) {
      setFormData((prev) => ({
        ...prev,
        court: data[0].id.toString(),
      }));
    }
  }, [data, setFormData]);

  useEffect(() => {
    setCourtId(court);
  }, [court]);

  return (
    <div css={{ margin: '0 0 20px 0' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={CourtBlackIcon}
          alt="court"
          width={20}
          height={20}
          css={{ margin: '0 6px 0 0' }}
        />
        코트 선택
      </div>
      <div css={{ width: ' 80%', margin: '12px 0 0 0', padding: '0 0 0 2px' }}>
        <ScheduleModalSelect
          name="court"
          data={
            data!.length > 0
              ? transferCourtListFormat(data!)
              : [{ value: '', label: '코트 선택' }]
          }
          selected={courtId}
          onChangeHandler={onChangeCourtHandler}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonAllOnceScheduleCourtSelect;
