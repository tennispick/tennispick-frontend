import { SetStateAction } from 'app/src/types/index';
import { LessonDateType } from 'app/src/features/lesson/type/lesson.type';
import { CourtListData } from 'app/src/apis/court/court.type';
import { CoachListData } from 'app/src/apis/coach/coach.type';
import CoachSelect from './CoachSelect';
import CourtSelect from './CourtSelect';
import LessonDateTypeInput from './LessonDateTypeInput';
import LessonTimeInput from './LessonTimeInput';
import { AllOnceFormDataProps } from 'app/src/features/schedule/type/regularLesson';
import ScheduleModalRegularLessonAllOnceScheduleSelectContainer from './ScheduleSelectContainer';
import { ScheduleType } from 'app/src/features/schedule/type/schedule.type';
import { DuplicateCheckScheduleLessonData } from 'app/src/apis/schedule/schedule.type';
import { css } from 'styled-system/css';

type Props = {
  allOnceData: AllOnceFormDataProps;
  setAllOnceData: SetStateAction<{
    lessonDateType: LessonDateType;
    lessonTime: string;
    coach: string;
    court: string;
  }>;
  lesson: string;
  courtList: CourtListData[];
  coachList: CoachListData[];
  allOnceSchedule: ScheduleType[];
  setAllOnceSchedule: SetStateAction<ScheduleType[]>;
  isDuplicateList: DuplicateCheckScheduleLessonData[];
};

const ScheduleModalRegularLessonAllOnceSchedule = ({
  allOnceData,
  setAllOnceData,
  lesson,
  courtList,
  coachList,
  allOnceSchedule,
  setAllOnceSchedule,
  isDuplicateList,
}: Props) => {
  const { lessonDateType, lessonTime, coach, court } = allOnceData;

  const isDisabled = lesson === '' ? true : false;

  return (
    <>
      <div className={css({ width: '25%' })}>
        <LessonDateTypeInput
          lessonDateType={lessonDateType}
          setFormData={setAllOnceData}
          disabled={isDisabled}
        />
        <LessonTimeInput
          lessonTime={lessonTime}
          setFormData={setAllOnceData}
          disabled={isDisabled}
        />
        <CoachSelect
          coach={coach}
          data={coachList}
          setFormData={setAllOnceData}
          disabled={isDisabled}
        />
        <CourtSelect
          court={court}
          data={courtList}
          setFormData={setAllOnceData}
          disabled={isDisabled}
        />
      </div>
      <ScheduleModalRegularLessonAllOnceScheduleSelectContainer
        lessonDateType={lessonDateType}
        lessonTime={lessonTime}
        allOnceSchedule={allOnceSchedule}
        setAllOnceSchedule={setAllOnceSchedule}
        disabled={isDisabled}
        isDuplicateList={isDuplicateList}
      />
    </>
  );
};

export default ScheduleModalRegularLessonAllOnceSchedule;
