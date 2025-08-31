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
    <div className="mb-5">
      <div className="flex items-center">
        <Image
          src={LessonCouponBlackIcon}
          alt={'scheduleType'}
          width={20}
          height={20}
          className="mr-1.5"
        />
        수강권 선택
      </div>
      <div className="w-4/5 mt-3 pl-0.5">
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
