import LessonCouponBlackIcon from '@icons/lesson_coupon_black.svg';
import Image from 'next/image';
import ScheduleModalSelect from '../../Select';
import { CustomerLessonListQueryData } from '@features/customer/type/customer.type';
import { ChangeEvent, useEffect, useState } from 'react';
import { SetStateAction } from '@/types/index';
import { CommonDataProps } from '@features/schedule/type/regularLesson';

type Props = {
  lessonId: string;
  lessonList: CustomerLessonListQueryData[];
  setCommonData: SetStateAction<CommonDataProps>;
};

const ScheduleModalRegularLessonCommonScheduleLessonSelect = ({
  lessonId: id,
  lessonList,
  setCommonData,
}: Props) => {
  const [lessonId, setLessonId] = useState(id);

  const transferLessonListFormat = (data: CustomerLessonListQueryData[]) =>
    data.map(({ lessonId, lessonName }) => ({
      value: lessonId.toString(),
      label: lessonName,
    }));

  const onChangeLessonHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setLessonId(value);
    setCommonData((prev) => ({
      ...prev,
      lesson: value,
    }));
  };

  useEffect(() => {
    if (lessonList && lessonList.length > 0) {
      setCommonData((prev) => ({
        ...prev,
        lesson: lessonList[0].lessonId.toString(),
      }));
    }
  }, [lessonList, setCommonData]);

  useEffect(() => {
    setLessonId(id);
  }, [id]);

  return (
    <div css={{ margin: '0 0 20px 0' }}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={LessonCouponBlackIcon}
          alt={'scheduleType'}
          width={20}
          height={20}
          css={{ margin: '0 6px 0 0' }}
        />
        수강권 선택
      </div>
      <div css={{ width: ' 80%', margin: '12px 0 0 0', padding: '0 0 0 2px' }}>
        <ScheduleModalSelect
          name="lesson"
          data={
            lessonList?.length > 0
              ? transferLessonListFormat(lessonList)
              : [{ value: '', label: '수강권 선택' }]
          }
          selected={lessonId}
          onChangeHandler={onChangeLessonHandler}
        />
      </div>
    </div>
  );
};

export default ScheduleModalRegularLessonCommonScheduleLessonSelect;
