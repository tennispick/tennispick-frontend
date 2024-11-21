import ScheduleTypeInput from './ScheduleTypeInput';
import CustomerInput from './customerInput/CustomerInput';
import LessonSelect from './LessonSelect';
import LessonTypeInput from './LessonTypeInput';

import { LessonType } from 'app/src/features/lesson/type/lesson.type';
import { ScheduleInputType } from 'app/src/features/schedule/type/schedule.type';
import { SetStateAction } from 'app/src/types/index';
import { CommonDataProps } from 'app/src/features/schedule/type/regularLesson';
import { CustomerLessonListQueryData } from 'app/src/features/customer/type/customer.type';
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
