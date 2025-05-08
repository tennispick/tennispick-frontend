import ScheduleTypeInput from './ScheduleTypeInput';
import CustomerInput from './customerInput/CustomerInput';
import LessonSelect from './LessonSelect';
import LessonTypeInput from './LessonTypeInput';

import { LessonType } from '@/이전 파일들/features/lesson/type/lesson.type';
import { ScheduleInputType } from '@/이전 파일들/features/schedule/type/schedule.type';
import { SetStateAction } from 'src/이전 파일들/types/index';
import { CommonDataProps } from '@/이전 파일들/features/schedule/type/regularLesson';
import { CustomerLessonListQueryData } from '@/이전 파일들/features/customer/type/customer.type';
import { css } from 'styled-system/css';

type Props = {
  commonData: CommonDataProps;
  setCommonData: SetStateAction<{
    scheduleType: ScheduleInputType;
    lessonType: LessonType;
    customer: { id: string; name: string }[];
    lesson: string;
  }>;
  setCustomerId: SetStateAction<string>;
  lessonList: CustomerLessonListQueryData[];
};

const ScheduleModalRegularLessonCommonSchedule = ({
  commonData,
  setCommonData,
  setCustomerId,
  lessonList,
}: Props) => {
  const { lessonType, customer, lesson } = commonData;

  return (
    <div className={css({ width: '260px' })}>
      <ScheduleTypeInput setCommonData={setCommonData} />
      <LessonTypeInput lessonType={lessonType} setCommonData={setCommonData} />
      <CustomerInput
        lesson={lesson}
        lessonType={lessonType}
        customer={customer}
        setCommonData={setCommonData}
        setCustomerId={setCustomerId}
      />
      <LessonSelect
        lessonId={lesson}
        lessonList={lessonList}
        setCommonData={setCommonData}
      />
    </div>
  );
};

export default ScheduleModalRegularLessonCommonSchedule;
