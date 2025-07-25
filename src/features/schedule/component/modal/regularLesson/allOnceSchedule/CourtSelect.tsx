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
    <div className="mb-5">
      <div className="flex items-center">
        <Image
          src={CourtBlackIcon}
          alt="court"
          width={20}
          height={20}
          className="mr-1.5"
        />
        코트 선택
      </div>
      <div className="w-4/5 mt-3 pl-0.5">
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
