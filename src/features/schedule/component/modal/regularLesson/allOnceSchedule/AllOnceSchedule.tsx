import { SetStateAction } from '@/types/index';
import { LessonDateType } from '@features/lesson/type/lesson.type';
import { CourtListData } from '@apis/court/court.type';
import { CoachListData } from '@apis/coach/coach.type';
import CoachSelect from './CoachSelect';
import CourtSelect from './CourtSelect';
import LessonDateTypeInput from './LessonDateTypeInput';
import LessonTimeInput from './LessonTimeInput';
import { AllOnceFormDataProps } from '@features/schedule/type/regularLesson';

type Props = {
  allOnceData: AllOnceFormDataProps;
  setAllOnceData: SetStateAction<{
    lessonDateType: LessonDateType;
    lessonTime: string;
    coach: string;
    court: string;
  }>;
  courtList: CourtListData[];
  coachList: CoachListData[];
};

const ScheduleModalRegularLessonAllOnceSchedule = ({
  allOnceData,
  setAllOnceData,
  courtList,
  coachList,
}: Props) => {
  const { lessonDateType, lessonTime, coach, court } = allOnceData;

  return (
    <div css={{ position: 'relative', width: '25%' }}>
      <LessonDateTypeInput setFormData={setAllOnceData} />
      <LessonTimeInput setFormData={setAllOnceData} />
      <CoachSelect coach={coach} data={coachList} />
      <CourtSelect court={court} data={courtList} />
    </div>
  );
};

export default ScheduleModalRegularLessonAllOnceSchedule;
