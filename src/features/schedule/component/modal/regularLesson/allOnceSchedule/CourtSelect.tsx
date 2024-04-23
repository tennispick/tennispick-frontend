import Image from 'next/image';
import ScheduleModalSelect from '../../Select';
import CourtBlackIcon from '@icons/court_black.svg';
import { CourtListData } from '@apis/court/court.type';
import { ChangeEvent, useEffect, useState } from 'react';

type Props = {
  court: string;
  data: CourtListData[];
};

const ScheduleModalRegularLessonAllOnceScheduleCourtSelect = ({
  court,
  data,
}: Props) => {
  const [courtId, setCourtId] = useState(court);

  const transferCourtListFormat = (data: CourtListData[]) =>
    data.map(({ id, name }) => ({ value: `${id}`, label: name }));

  const onChangeCourtHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCourtId(value);
  };

  useEffect(() => {
    setCourtId(court === '' ? data![0].id.toString() : court);
  }, [court, data]);

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
        />
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonAllOnceScheduleCourtSelect;
