import { IndividualFormDataProps } from 'app/src/features/schedule/type/regularLesson';
import ScheduleRow from './ScheduleRow';
import ScheduleTableHeader from './TableHeader';
import { SetStateAction } from 'app/src/types/index';
import { CourtListData } from 'app/src/apis/court/court.type';
import { CoachListData } from 'app/src/apis/coach/coach.type';
import { CustomerLessonListQueryData } from 'app/src/features/customer/type/customer.type';
import { css } from 'styled-system/css';

type Props = {
  lesson: string;
  individualData: IndividualFormDataProps[];
  setIndividualData: SetStateAction<IndividualFormDataProps[]>;
  lessonList: CustomerLessonListQueryData[];
  coachList: CoachListData[];
  courtList: CourtListData[];
};

const ScheduleModalRegularLessonIndividualSchedule = ({
  lesson,
  individualData,
  setIndividualData,
  lessonList,
  coachList,
  courtList,
}: Props) => {
  const isDisabled = lesson === '' ? true : false;
  const targetLesson = lessonList?.find(
    ({ lessonId }) => String(lessonId) === lesson,
  );

  return (
    <div className={css({ width: 'calc(100% - 260px)' })}>
      <ScheduleTableHeader />
      {individualData.map((data, index) => {
        return (
          <ScheduleRow
            key={index}
            index={index}
            individualData={data}
            dataLength={individualData.length}
            setIndividualData={setIndividualData}
            remainLessonCount={targetLesson?.remainLessonCount}
            coachList={coachList}
            courtList={courtList}
            disabled={isDisabled}
          />
        );
      })}
    </div>
  );
};

export default ScheduleModalRegularLessonIndividualSchedule;
